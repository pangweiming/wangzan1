@import url(./icon.css);

:root {
    /* 主要背景 */
    --body-bg-color: #f6f6f6;
    --card-bg-color: #fff;
    --modal-bg-color: #fff;
    --bg-transparent-color: rgba(0, 0, 0, 0.1);
    --transparent-color-01: rgba(0, 0, 0, 0.1);
    --transparent-color-02: rgba(106, 89, 209, 0.1);
    --line-color: #d7d7d7;

    /* 主要主题颜色 */
    --first-color: #0e2431;
    --secend-color: #6a59d1;
    --third-color: #777;

    /* hover颜色 */
    --hover-color: #614fd0;
    /* 盒子阴影 */
    --box-shadow: 0px 0px 20px rgb(0 0 0 /10%);

    /* 字体大小 */
    --small-font-size: .9em;
    --normal-font-size: 1em;

    /* color filet */
    --color-filter: invert(1);

    /* 滚动条 */
    --scrool-bar-color: #c5cadf;
    --scrool-thumb-color: #70768a;
    --scrool-thumb-hover-color: #454f6b;

}

.dark-theme {
    /* 主要背景 */
    --body-bg-color: #0e1b31;
    --card-bg-color: #132347;
    --modal-bg-color: #102048;
    --bg-transparent-color: rgba(255, 255, 255, 0.1);
    --transparent-color-01: rgba(255, 255, 255, 0.1);
    --line-color: #454f6b;

    /* 主要主题颜色 */
    --first-color: #fff;
    --secend-color: #6a59d1;
    --third-color: #a9afc3;


    /* color filet */
    --color-filter: invert(0);

    /* 滚动条 */
    --scrool-bar-color: #c1ceff;
    --scrool-thumb-color: #282f4e;
    --scrool-thumb-hover-color: #454f6b;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    color: var(--first-color);
    background-color: var(--body-bg-color);
    margin: 2rem 0 0 0;
    transition: .5s ease;
}


a {
    text-decoration: none;
}

li {
    list-style: none;
}

/* 滚动条 */
::-webkit-scrollbar {
    width: 10px;
    background: var(--scrool-bar-color);
}

::-webkit-scrollbar-thumb {
    background: var(--scrool-thumb-color);
    border-radius: 2em;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--scrool-thumb-hover-color);
}

/* 头部 */

header {
    z-index: 99999;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    transition: .6s ease;

}

header.sticky {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: var(--box-shadow);
}

.nav-bar {
    position: relative;
    height: calc(4rem + 1rem);
    max-width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    transition: .6 ease;
}

header.sticky .nav-bar {
    height: calc(2.5rem + 1rem);
}

.nav-bar .logo {
    color: var(--first-color);
    font-size: 1.3em;
    font-weight: 600;
}

.nav-bar a {
    color: var(--first-color);
    font: var(--normal-font-size);
    font-weight: 500;
}

.nav-items a.active {
    color: var(--secend-color);
}

.nav-items a:not(:last-child) {
    margin-right: 50px;
}

.nav-items a:hover {
    color: var(--secend-color);
}

.nav-menu-btn {
    display: none;

}

/* 首页 */
.home {
    position: relative;
    max-width: 1250px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem 2rem;
    flex-direction: column;
}

.home .home-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}
.home .home-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.home-container .media-icons {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
}

.home-container .media-icons a {
    color: var(--secend-color);
    font-size: 1.5em;
    margin: 10px 0;
}

.home-container .media-icons a:hover {
    color: var(--hover-color);
}

/* .home-container .info {
    min-width: 300px;
} */

.home-container .info h2 {
    font-size: 4em;
    font-weight: 600;
    line-height: 70px;
}


.home-container .info h3 {
    color: var(--third-color);
    font-feature-settings: 1.3em;
    font-weight: 600;
    line-height: 50px;
}


.home-container .info p {
    color: var(--third-color);
    font-size: var(--normal-font-size);
    max-width: 350px;
}

.btn {
    background-color: var(--secend-color);
    color: #fff;
    font-size: var(--normal-font-size);
    font-weight: 500;
    display: inline-block;
    margin-top: 25px;
    padding: 20px 30px;
    letter-spacing: 1px;
    border-radius: 10px;
}

.btn:hover {
    border-color: var(--hover-color);
}

.home-container .home-img {
    margin-right: 30px;
    position: relative;
}

.home-container .home-img img {
    max-width: 500px;
    width: 100%;
    transform: translate(0, 0);
}

.home .scroll-down {
    color: var(--first-color);
    font-size: var(--normal-font-size);
    font-weight: 500;
    margin-top: 30px;
}

.home .scroll-down i {
    font-weight: 600;
    color: var(--secend-color);
    font-size: 1.2em;
    display: inline-block;
    animation: arrow-down ease 2s infinite;
}

@keyframes arrow-down {
    0% {
        transform: translateY(0);
    }

    30% {
        transform: translateY(10px);
    }
}


/* 关于 */
.about .container .content {
    column-gap: 40px;
    width: 100%;
}

.about-img {
    max-width: 100%;

    border-radius: 10px;
}

.about-img img {
    max-width: 500px;
    width: 100%;
}

.about-info .description {
    max-width: 600px;
}

.about-info .description h3 {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 10px;
}

.about-info .description h4 {
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 10px;
}

.about-info .description h4 span {
    color: var(--secend-color);
}

.about-info .description p {
    color: var(--third-color);
    font-size: var(--normal-font-size);
    margin-bottom: 15px;
    padding-bottom: 25px;
    border-bottom: 2px solid var(--line-color);
}

.about-info .professional-list {
    display: flex;
    column-gap: 30px;
}

.about-info .professional-list .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    margin-bottom: 20px;
}

.about-info .professional-list .list-item h3 {
    font-size: 2.5em;
    font-weight: 700;
}

.about-info .professional-list .list-item span {
    color: var(--third-color);
    font-size: var(--small-font-size);
}

/* 技能 */
.skills .container .content {
    width: 100%;
}

.skills-description {
    max-width: 700px;
    margin-bottom: 50px;
}

.skills-description h3 {
    font-size: 2em;
    margin-bottom: 5px;
}

.skills-info {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 0 auto;
}

.skills-info h4 {
    margin-bottom: 20px;
}

.skills-info h4 label {
    background: var(--secend-color);
    color: #fff;
    font-size: var(--normal-font-size);
    font-weight: 400;
    padding: 5px 15px;
    border-radius: 5px;
}

.education-all {
    margin-bottom: 80px;
}

.edu-list .item {
    background: var(--card-bg-color);
    box-shadow: var(--box-shadow);
    border-bottom: 3px solid var(--secend-color);
    padding: 20px;
    margin-top: 15px;
    border-radius: 6px;
    transition: .3s ease;
}

.edu-list .item .year {
    font-size: var(--small-font-size);
    margin-bottom: 5px;
}

.edu-list .item p {
    color: var(--third-color);
    font-size: var(--small-font-size);
}

.edu-list .item p span {
    color: var(--first-color);
    font-size: var(--normal-font-size);
    font-weight: 500;
}

.bar {
    background-color: var(--card-bg-color);
    box-shadow: var(--box-shadow);
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 6px;
    transition: .3s ease;
}

.bar .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    font-size: var(--small-font-size);
}

.bar .info span {
    font-weight: 500;
}

.bar .line {
    position: relative;
    width: 100%;
    height: 7px;
    background: #c5cadf;
    border-radius: 2px;
}

.bar .line::before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: var(--secend-color);
    top: 0;
    left: 0;
    width: 95%;
    border-radius: 2px;
}

.bar .html::before {
    width: 95%;
}

.bar .css::before {
    width: 85%;
}

.bar .javascript::before {
    width: 80%;
}

.bar .jquery::before {
    width: 80%;
}

.bar .java::before {
    width: 75%;
}

.experience-card {
    background: var(--card-bg-color);
    border-bottom: 3px solid var(--secend-color);
    padding: 35px;
    border-radius: 6px;
    box-shadow: var(--box-shadow);
    transition: .3s ease;
}

.experience-card .upper {
    line-height: 30px;
}

.experience-card h3 {
    font-size: 1.3em;
    font-weight: 700;
}

.experience-card h5 {
    font-size: var(--small-font-size);
    font-weight: 500;
    font-style: italic;
}

.experience-card span {
    color: var(--third-color);

}

.experience-card .hr {
    width: 100%;
    height: 2px;
    background-color: var(--line-color);
    margin: 10px 0 22px;
}

.edu-list .item:hover,
.bar:hover,
.experience-card:hover {
    transform: scale(1.03);
}

/* 服务 */
.services .container .content {
    width: 100%;
}

.services-description h3 {
    font-size: 2em;
    margin-bottom: 50px;

}

.service-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    max-width: 100%;
    margin: 0 auto;
    gap: 20px;
}

.service-card {
    background-color: var(--card-bg-color);
    border-bottom: 3px solid var(--secend-color);
    padding: 50px;
    border-radius: 6px;
    box-shadow: var(--box-shadow);
}

.service-card>i {
    color: var(--secend-color);
    font-size: 3em;
    margin-bottom: 30px;
}

.service-card h3 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 20px;
}

.service-card .learn-more-btn i {
    display: inline-block;
    transition: .3s ease;
}

.service-card:hover .learn-more-btn i {
    transform: translateX(10px);
}

.service-modal {
    z-index: 999999;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: var(--bg-transparent-color);
    backdrop-filter: blur(10px);

    visibility: hidden;
    opacity: 0;
    transition: .3s ease;
}

.service-modal.active {
    visibility: visible;
    opacity: 1;
}

.service-modal-body {
    position: relative;
    background: var(--modal-bg-color);
    max-width: 600px;
    margin: 20px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    transform: translateY(-50px);
    transition: .5s ease;
}

.service-modal.active .service-modal-body {
    transform: translateY(0);
}

.service-modal-body .modal-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;
}

.service-modal-body h3 {
    font-size: 2em;
}


.service-modal-body h4 {
    font-size: 1.3em;
    font-weight: 600;
    margin: 15px 0 10px;
}


.service-modal-body ul li {
    margin-top: 15px;
}

/* 作品 */
.portfolio .container .content {
    width: 100%;
}

.portfolio-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    max-width: 100%;
    gap: 35px;
    margin: 0 auto;
}

.portfolio-list .img-card {
    position: relative;
    max-width: 100%;
    height: 360px;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    overflow: hidden;
    cursor: pointer;
}

.portfolio-list .img-card .overlay {
    transition: 1s ease;
}


.portfolio-list .img-card:hover .overlay {
    z-index: 777;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.portfolio-list .img-card .info {
    z-index: 777;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 20px;
    color: #fff;
    transform: translateY(20px);
    opacity: 0;
    transition: .5s ease;
}

.portfolio-list .img-card:hover .info {
    transform: translateY(0);
    opacity: 1;
}

.portfolio-list .img-card .info h3 {
    font-size: 1.5em;
}

.portfolio-list .img-card .info span {
    font-size: 1.2em;
}

.portfolio-list .img-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.portfolio-model {
    z-index: 999999;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: var(--transparent-color-01);
    backdrop-filter: blur(20px);

    visibility: hidden;
    opacity: 0;
    transition: .3s ease;
}

.portfolio-model.active {
    visibility: visible;
    opacity: 1;
}

.portfolio-model-body {
    position: relative;
    background: var(--modal-bg-color);
    max-width: 600px;
    margin: 20px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: var(--box-shadow);

    transform: translateY(-50px);
    transition: .5s ease;
}

.portfolio-model.active .portfolio-model-body {
    transform: translateY(0);
}

.portfolio-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;
}

.portfolio-model-body h3 {
    font-size: 1.5em;
}

.portfolio-model-body img {
    width: 100%;
    margin: 20px 0;
    border-radius: 10px;
}

/* 联系 */
.get-in-touch {
    margin-top: 70px;
}

.get-in-touch .containter .content {
    width: 100%;
}

.get-in-touch .content-card {
    position: relative;
    width: 90%;
    background: var(--card-bg-color);
    box-shadow: var(--box-shadow);
    padding: 50px;
    border-radius: 10px;
    column-gap: 50px;
}

.content-card .title {
    text-transform: uppercase;
    line-height: 60px;
}

.content-card .title h4 {
    font-size: 1.2em;
    font-weight: 300;
    line-height: 20px;
}

.content-card .title h3 {
    font-size: 2.3em;
    font-weight: 400;
}

.content-card .title h2 {
    font-size: 4.2em;
    font-weight: 700;
    background: linear-gradient(to top, transparent 0%, var(--first-color) 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: .9;
}

/* 联系 */
.contact .container .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.contact-left h2 {
    font-size: 2.1em;
    font-weight: 800;
    margin-bottom: 40px;
}

.contact-list li {
    margin-bottom: 40px;

}

.contact-list li i {
    color: var(--secend-color);
    font-size: 2rem;
    margin-right: 5px;
}

.contact-list li h3 {
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 10px;
}

.contact-list li span {
    color: var(--second-color);
    margin-left: 40px;
}

.contact-list li span a {
    color: var(--third-color);
}

.contact-right p {
    color: var(--third-color);
    font-size: 1.6em;
    margin-bottom: 30px;
}

.contact-right p span {
    color: var(--first-color);
    font-weight: 700;

}

.contact-form input,
.contact-form textarea {
    border: none;
    color: var(--first-color);
    background: var(--transparent-color-02);
    font-size: var(--normal-font-size);
    margin-bottom: 20px;
    padding: 15px 40px 40px 20px;
}

.contact-form textarea {
    width: 100%;
    resize: none;
}

::placeholder {
    color: var(--first-color);
}

.contact-form .first-row input {
    width: 100%;
}

.contact-form .second-row {
    display: flex;
    justify-content: space-between;
}

.contact-form .second-row input {
    width: 48%;
}

.contact-form .btn {
    border: none;
    margin-top: 0;
    border-radius: 5px;
    cursor: pointer;
}

/* 页脚 */
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--secend-color);
    width: 100%;
    margin-top: 50px;
    padding: 3rem 2rem;
    color: #fff;
}

footer a {
    color: #fff;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1150px;
}

.footer-container .about h2 {
    font-size: 3em;
    font-weight: 600;
    background: linear-gradient(to top, transparent 0%, #fff 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: .8;
}

.footer-container .about p {
    font-size: var(--normal-font-size);
    font-weight: 300;
    margin-bottom: 30px;
}

.footer-container .info,
.footer-container .follow {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-container .info h3,
.footer-container .follow h3 {
    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 30px;
}

.footer-container .info ul,
.footer-container .follow ul {
    display: flex;
}

.footer-container .info a {
    margin: 20px;
}

.footer-container .follow a {
    font-size: 1.5em;
    margin: 20px;
}

.footer-copyright p {
    font-size: var(--normal-font-size);
    font-weight: 300;
    margin-top: 50px;
}



/* 公用区域  */

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.section {
    position: relative;
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    padding: 6rem 2rem 2rem;
}

.sub-section {
    position: relative;
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    padding: 6rem 0;
}

.section-title-01 {
    font-size: 4.5em;
    font-weight: 800;
    margin-bottom: 2rem;
    background: linear-gradient(to top, transparent 0%, var(--first-color) 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: .1;
}

.section-title-02 {
    font-size: 2.5em;
    font-weight: 700;
    transform: translateY(-80px);
}

.section-title-02::before {
    content: '';
    position: absolute;
    background-color: var(--secend-color);
    width: 70px;
    height: 5px;
    right: 0;
    bottom: 0;
}

.container {
    position: relative;
    flex-direction: column;
}

.fab {
    font-size: 30px;
}

/* 向上按钮 */
.scrollToTop-btn {
    z-index: 99999;
    position: fixed;
    right: 0;
    bottom: 20px;
    width: 45px;
    height: 45px;
    background-color: var(--secend-color);
    color: #fff;
    font-size: var(--small-font-size);
    border-radius: 3px;
    cursor: pointer;
    opacity: 0;
    transition: .5s ease;
}

.scrollToTop-btn.active {
    right: 20px;
    pointer-events: all;
    opacity: 1;
}

/* 不同模式 */
.theme-btn {
    z-index: 99999;
    position: fixed;
    right: 0;
    top: 100px;
    background: var(--transparent-color-01);
    backdrop-filter: blur(20px);
    width: 50px;
    height: 50px;
    font-size: 1.2em;
    border-radius: 5px 0 0 5px;
    box-shadow: var(--box-shadow);
    cursor: pointer;
}

.theme-btn .icon-taiyang,
.theme-btn.sun .icon-yueliang {
    display: none
}

.theme-btn.sun .icon-taiyang {
    display: block;
}

@media screen and (max-width: 1070px) {

    /* 头部导航 */
    .navigation {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--transparent-color-01);
        visibility: hidden;
        opacity: 0;
    }

    .navigation.active {
        visibility: visible;
        opacity: 1;
    }


    .nav-items {
        position: relative;
        background: var(--modal-bg-color);
        width: 600px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 20px;
        padding: 40px;
        border-radius: 10px;
        box-sizing: var(--box-shadow);
        transform: translateY(-50px);
        transition: .3s ease;

    }

    .navigation.active .nav-items {
        transform: translateY(0);
    }

    .nav-items a {
        margin: 15px 50px;
    }

    .nav-close-btn {
        position: absolute;
        background: url(../store/images/close-btn.png)no-repeat;
        filter: var(--color-filter);
        background-size: 12px;
        background-position: center;
        width: 40px;
        height: 40px;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .nav-menu-btn {
        background: url(../store/images/menu-btn.png)no-repeat;
        filter: var(--color-filter);
        background-size: 30px;
        background-position: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: block;
    }

    /* 首页 */
    .home .home-container .info {
        font-size: 0.85rem;
    }

    /* 关于 */
    .about .container .content {
        display: grid;
        width: 100%;
        row-gap: 20px;
    }

    .about-img img {
        min-width: 0;
        width: 100%;
    }

    .about-info .professional-list {
        flex-direction: column;
    }

    .about-info .professional-list .list-item {
        justify-content: start;
    }

    /* 交往 */
    .get-in-touch .content-card {
        display: grid;
        width: 100%;
    }

    /* 联系 */
    .contact .content {
        flex-direction: column;
        font-size: 0.9rem;
    }

    .contact .contact-left {
        margin-bottom: 40px;
    }

    .contact-form .second-row {
        flex-direction: column;
    }

    .contact-form .second-row input {
        width: 100%;
    }


    /* 页脚 */

    footer .footer-container {
        flex-direction: column;
    }

    .footer-container .about,
    .footer-container .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }

    .footer-container .info ul {
        align-items: center;
        flex-direction: column;
    }

    .footer-container .info ul li {
        margin: 5px 0;
    }

    .footer-container .hr {
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.1);
        margin: 10px 0 22px;
    }
}

@media screen and (max-width:730px) {

    /* 整体布局 */
    body {
        margin: 5rem 0 0 0;
    }

    .section-title-01 {
        font-size: 3em;
    }

    .section-title-02 {
        font-size: 2em;
        transform: translateY(-65px);
    }

    /* 首页 */
    .home .home-container {
        display: grid;
    }

    .home-container .home-img {
        justify-content: center;
        align-content: center;
        display: flex;
        padding-bottom: 20px;
    }

    .home-container .home-img img {
        width: 65%;

    }

    .home .home-container .info {
        font-size: 0.8rem;
    }

    .home .home-header {
        display: flex;
        flex-direction: row;
    }

    .media-icons {
        margin-bottom: 80px;
    }

    .media-icons a {
        width: 30px;
    }

    /* 交往 */
    .get-in-touch .content-cardP {
        display: grid;
    }

    .content-card .title {
        font-size: 0.6rem;
        line-height: 40px;
    }

    .content-card .contact-btn .btn {
        font-size: 0.8rem;
    }
}