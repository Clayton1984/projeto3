import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Tenetur culpa aperiam iusto soluta magnam deserunt illum veniam ab quas,
    itaque est repellat dolor dolores mollitia, a quis nobis vel beatae.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
