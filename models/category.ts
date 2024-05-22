export interface ICategory {
  id: string;
  title: string;
  color: string;
}

/**
 * Category class
 *
 * @description Represents a category with an id, title, and color.
 * @param id - The id of the category.
 * @param title - The title of the category.
 * @param color - The color associated with the category.
 */
class Category implements ICategory {
  id: string;
  title: string;
  color: string;

  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
