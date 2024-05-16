/**
 * Category class
 *
 * @description Represents a category with an id, title, and color.
 */
class Category {
  public id: string;
  public title: string;
  public color: string;

  /**
   * Creates a new Category.
   *
   * @param id - The id of the category.
   * @param title - The title of the category.
   * @param color - The color associated with the category.
   */
  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
