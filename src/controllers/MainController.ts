export class MainController {
  public createView(): HTMLDivElement {
    const container = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = "Welcome to our Main page";

    const article = document.createElement("div");
    article.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel posuere odio. Integer aliquet tempor placerat. Suspendisse ac nulla ipsum. Praesent sit amet iaculis erat, in laoreet erat. Maecenas in nibh quis urna vulputate interdum. Nullam justo purus, scelerisque a iaculis sit amet, finibus eu massa. Maecenas id risus et neque viverra congue. Nam a lacinia augue. In hac habitasse platea dictumst. Vivamus consequat ullamcorper massa vel fermentum. Fusce et sollicitudin neque. Aliquam consectetur lectus ac odio porttitor consequat. Etiam rhoncus nunc leo, ut posuere tortor consectetur a.";

    const button = document.createElement("button");
    button.innerText = "Login";

    container.append(title, article, button);

    return container;
  }
}