import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';

import { mapData } from '../../api/map-data';

import { Heading } from '../../components/Heading';
import { GridTwoColum } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[ˆa-z0-9-_]/gi);
    const slug = pathname ? pathname : 'pages/api';

    const load = async () => {
      try {
        const data = await fetch('https://z8z0l.mocklab.io/pages/api' + slug);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        console.log(e);
        setData(undefined);
      }
    };

    load();
  }, []);
  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColum key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
