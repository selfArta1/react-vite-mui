import { Section_item } from "@/lib/types";
import { Container } from "@mui/material";

export default function SectionLayout({
  section_content,
  inViewRef,
}: {
  section_content: Section_item;
  inViewRef: any;
}) {
  const { id, desc, imgsrc, url } = section_content;

  return (
    <Container maxWidth="xl">
      <section id={id} ref={inViewRef}>
        <p>
          本流程会尽量贴出原文档链接，因为所有文章都可能会过期，对照着官方文档是最靠谱的。
          有人喜欢大而全的"模板"方案，而我更喜欢可组合可拆分的"积木"型方案。因为大而全可能有以下问题：魔改了一些东西但你不知道、依赖包过期了但不更新、想改配置但不知道如何下手等等。当然，不是所有的大而全方案都有问题，但这纯粹依赖作者的个人品味。
          其实本文中还可以添加 stylelint（有 Tailwind CSS 不再写大量组件
          CSS，但还是可能写一部分）、React
          状态管理方案等，但未写入，感兴趣的可自行添加最合适的。
        </p>
        <a>{url}</a>
        <p>{desc}</p>
        <p>imgsrc: {imgsrc}</p>
      </section>
    </Container>
  );
}
