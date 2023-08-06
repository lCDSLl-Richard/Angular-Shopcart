export class Product {
  id = '';
  title = '';
  price = 0;
  description = '';
  category = '';
  image = '';

  constructor(
    id: string = '',
    title: string = '',
    price: number = 0,
    description: string = '',
    category: string = '',
    image: string = ''
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }
}
