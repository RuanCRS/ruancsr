import React from "react";

import { InternalNews, Content } from "./styles";

import ImageInternalNews from "../../assets/TopNews/01news.png";

export default function ComponentInternalNews() {
  return (
    <InternalNews>
      <Content>
        <img src={ImageInternalNews} alt="test" title="test" />
      </Content>
    </InternalNews>
  );
}
