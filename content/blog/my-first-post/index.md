---
title: 'First Blog Post'
date: '2021-02-08'
category: 'Daily'
tags:
  - "Daily"
  - "Random"
description: "탈도 많고 오래도 걸린 블로그가 드디어 완성됐다. 꽤 전부터 개발자로써의 테크블로그가 갖고 싶었는데 기존의 블로그 서비스를 쓸까하다가 나의 사이트도 revamp하고 싶었고해서 만들게되었고 포스팅과정을 간단히 하고 싶었기에 개츠비 프레임워크 + Material UI 라이브러리를 이용해 개발을 시작했다."
socialImage: "/media/placeholder.jpg"
draft: false
---

##첫 블로그 개장기념 포스팅

탈도 많고 오래도 걸린 블로그가 드디어 완성됐다. 꽤 전부터 개발자로써의 테크블로그가 갖고 싶었는데 기존의 블로그 서비스를 쓸까하다가 나의 사이트도 revamp하고 싶었고해서 만들게되었고 포스팅과정을 간단히 하고 싶었기에 개츠비 프레임워크 + Material UI 라이브러리를 이용해 개발을 시작했다.

MUI를 적극적으로 써볼 생각이였는데 내가 참고로 하고 있던 사이트 디자인과 MUI는 잘 맞지 않아서 MUI 컴포넌트를 잘 활용하지 못한거같아 아쉬움이 남는다. 그리고 느낀게 MUI를 쓸꺼면 MUI에 맞게 디자인을 선택해야한다는걸 느꼈다. MUI는 이미 완성되있는 디자인 컴포넌트이기에...

개츠비를 쓰면서 나름 시행착오가 많았다. 기존의 Page 폴더 방식으로 하면 페이지만드는게 간단했지만 그렇게 하고싶지 않았기에 [createPage API](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/)를 쓰는 길을 택했고 하지만 기존의 boilerplate은 page 폴더 방식으로 되어있어서 createPage API와 page 폴더방식의 충돌이 생각도 못한 race condition 에러를 일으켜 골머리를 앓기도 했었다.

그리고 개츠비는 gatsby.node와 gatsby.config에서 많은 설정을 담당해주는데 위의 두 파일의 내용을 바꿀때마다 서버를 다시 시작해야한다는게 불편했다. 아마 개츠비가 Static site generator이기 때문인거같은데 참조자료를 넣겠다

> [All pieces of information (including the current page URL) must be pulled from other sources or generated during build time or runtime before inserting it into the markup.](https://css-tricks.com/how-to-the-get-current-page-url-in-gatsby/)

아무쪼록 이 블로그는 내가 배우는 내용 또는 기억하고 싶은 것들을 저장해두는 공간으로 계속해서 업데이트해나갈 예정이다. 메인은 개발과 관련된 거겠지만 다른 관심사도 포함될수 있다.

앞으로 블로그에 더 업데이트할 개발내용

+ [ ] 블로그 댓글기능
+ [ ] 카테고리, 태그 페이지 추가
+ SEO 설정 다듬기
  + [ ] Sitemap
+ About Page를 어떻게 할지
  + [ ] 포트폴리오 페이지로 만들껀지

