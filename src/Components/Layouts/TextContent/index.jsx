import Style from "./style.module.css";

function TextContent({ title, subTitle, paragraph, secundParagraph }) {
  return (
    <div>
      {title && <h1 className={Style.title}>{title}</h1>}
      {subTitle && <h3 className={Style.subTitle}>{subTitle}</h3>}
      {paragraph && <p className={Style.paragraph}>{paragraph}</p>}
      {secundParagraph && <p className={Style.paragraph}>{secundParagraph}</p>}
    </div>
  );
}

export default TextContent;
