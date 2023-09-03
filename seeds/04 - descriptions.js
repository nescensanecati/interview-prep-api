/**
 * @param { import("knex").Knex } knex
 * @returns { Promise"void" }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('descriptions').del();
  await knex('descriptions').insert(
    [
      { description_id: 1, question_id: 1, description: `HTML stands for "HyperText Markup Language." It is the standard markup language used for creating web pages and web applications. HTML allows web developers to structure the content on a web page and define how elements on the page should be displayed in web browsers. It consists of various tags and attributes that describe the structure and presentation of text, images, links, forms, and other elements on a web page.` },
      { description_id: 2, question_id: 2, description: `In HTML, the "html" element is used to define the structure of an HTML document. It serves as the root element of an HTML page and contains all the other HTML elements that make up the document. The opening "html" tag is placed at the beginning of the document, and the closing "/html" tag is placed at the end.` },
      { description_id: 3, question_id: 3, description: `The correct HTML tag for creating an ordered list is the "ol" element. An ordered list is used to display a list of items in a specific order, such as a numbered list. Each item within the list is typically marked with a number (or another ordered marker, depending on the list type).` },
      { description_id: 4, question_id: 4, description: `The HTML tag used for creating a hyperlink is the "a" (anchor) element. The "a" element is used to define a hyperlink that allows users to navigate to another web page, a specific location within the same page, or an external resource like a file or an email address.` },
      { description_id: 5, question_id: 5, description: `The HTML "meta" tag is used to provide metadata about an HTML document. Metadata is information about the data within the document, rather than the content of the document itself. The "meta" tag is typically placed within the "head" section of an HTML document and does not have a closing tag.` },
      { description_id: 6, question_id: 6, description: `To insert a line break within a paragraph in HTML, you can use the "br" tag. The "br" tag is an empty or self-closing tag, which means it doesn't have a closing tag. When you use it within a paragraph ("p") or any other block-level element, it causes the content that follows it to appear on a new line.` },
      { description_id: 7, question_id: 7, description: `In HTML, you can comment out multiple lines of code using the "!-- and --" comment delimiters. Anything placed between these delimiters will be treated as a comment and will not be rendered by the web browser. HTML comments can span multiple lines and can be used to add explanations, notes, or temporarily disable a block of code. ` },
      { description_id: 8, question_id: 8, description: `The HTML tag used to define the title of a webpage is the "title" element. The "title" element is placed within the "head" section of an HTML document and is used to specify the title that appears in the browser's title bar or tab when the webpage is loaded.` },
      { description_id: 9, question_id: 9, description: `The HTML "iframe" element is used to embed another HTML document or web page within the current web page. The term "iframe" stands for "inline frame." This element allows you to create a container within your web page where you can display content from another source.` },
      { description_id: 10, question_id: 10, description: `To specify the character encoding for an HTML document, you should use the charset attribute within a "meta" tag in the "head" section of your HTML document. The most commonly used character encoding for modern web documents is UTF-8, which can handle a wide range of characters from various languages.` },
      { description_id: 11, question_id: 11, description: `To create a hyperlink that allows users to send an email when clicked, you can use the "a" (anchor) element with the mailto: URL scheme. The mailto: scheme specifies that clicking the link will open the default email client on the user's device and populate the recipient's email address, subject, and other optional fields.` },
      { description_id: 12, question_id: 12, description: `The HTML element used to define a table row is the "tr" element. In HTML, tables are structured using a combination of elements, and the "tr" element is used to create a single row within a table. ` },
      { description_id: 13, question_id: 13, description: `The HTML "div" element, which stands for "division," is a generic container element used to group and structure content within an HTML document. Its primary purpose is to divide the content into sections or groups, which can then be targeted for styling, layout, or JavaScript manipulation. The "div" element does not provide any specific visual formatting or semantic meaning on its own but is a fundamental building block for creating structured and organized web pages. ` },
      { description_id: 14, question_id: 14, description: `The HTML tag used to define a bulleted list is the "ul" element, which stands for "unordered list." An unordered list typically consists of a series of list items (defined using the "li" element) where each item is preceded by a bullet point or another symbol, depending on the browser's default styling or custom CSS.` },
      { description_id: 15, question_id: 15, description: `The correct HTML tag for inserting a line break is the "br" tag. The "br" tag is an empty or self-closing tag, which means it doesn't have a closing tag. When used in the HTML code, it inserts a line break, causing the content that follows it to appear on a new line.` },
      { description_id: 16, question_id: 16, description: `The HTML attribute used to provide alternative text for images is the alt attribute. The alt attribute is used within the "img" element to describe the content or purpose of the image in case the image cannot be displayed or if it is read by screen readers for accessibility.` },
      { description_id: 17, question_id: 17, description: `The HTML "form" element is used to create interactive forms on web pages. Forms are a fundamental part of web applications and websites because they allow users to input and submit data to the server for processing. The "form" element defines a container for various form elements such as text fields, radio buttons, checkboxes, submit buttons, and more.` },
      { description_id: 18, question_id: 18, description: `The HTML element used to define the structure of an HTML document's body content is the "body" element. The "body" element is part of the overall structure of an HTML document and contains all the visible content that is displayed within a web page, such as text, images, links, paragraphs, headings, and other elements that are meant to be seen and interacted with by users.` },
      { description_id: 19, question_id: 19, description: `The HTML "input" element with type="checkbox" is used to create checkbox input fields in web forms. Checkboxes allow users to select one or more options from a list of choices. The purpose of this element is to give users the ability to make binary selections (usually "checked" or "unchecked") among multiple options.` },
      { description_id: 20, question_id: 20, description: `The HTML tag used to create a numbered list is the "ol" (ordered list) element. An ordered list is a list in which each item is preceded by a number, typically starting from 1 and incrementing for each item in the list. Each item in the list is represented by the "li" (list item) element.` },
    ]
  );
};