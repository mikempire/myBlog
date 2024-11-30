import {classNames} from "shared/lib/classNames/classNames";

describe('classNames', () => {
  test('first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with add class', () => {
    expect(classNames('someClass', {}, ['new'])).toBe('someClass new');
  });

  test('with mods', () => {
    const expected = 'someClass new hovered';

    expect(classNames('someClass', { hovered: true }, ['new'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass new hovered';

    expect(classNames('someClass', { hovered: true, scroll: false }, ['new'])).toBe(expected);
  });
});
