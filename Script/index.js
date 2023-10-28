const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let themeColor = document.querySelector("#theme-color");
let item_blog = document.querySelector(".parent-item-blog");
let close_item_blog = document.querySelector(".close-item-blog");
let icon_box_1 = document.querySelector(".icon-box-1");
let body = document.querySelector("body");
let nav = document.querySelector("nav");

let D = new Date();
let hour = D.getHours();

if (hour > 20) {
  themeColor.setAttribute("content", "#17242A");
} else {
  themeColor.setAttribute("content", "#f7f7fa");
}

const per_up_btn_up = document.querySelector(".per-up-btn-up");

function fillScrollLine() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  per_up_btn_up.style.backgroundImage =
    "conic-gradient(var(--purple)" +
    percentScrolled +
    "%, var(--body-color) 0)";
}

window.addEventListener("scroll", fillScrollLine);

// class blog {
//   constructor(id, title, writer, calendar) {
//     this.id = id;
//     this.title = title;
//     this.writer = writer;
//     this.calendar = calendar;
//   }
// }

// const blog_1 = new blog(
//   1,
//   "افزونه کروم برای طراحان وب | افزونه ‌های مهم کروم در برنامه ‌نویسی ",
//   " صدرا رحمتی ",
//   " 6/7/02 "
// );

// icon_box_1.addEventListener("click", function () {
//   item_blog.setAttribute("style", "top: 5rem;");
//   body.setAttribute("style", "overflow-y: hidden;");
//   nav.setAttribute(
//     "style",
//     "box-shadow: 0 15px 20px -3px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"
//   );
//   let content = (document.createTextNode = `
//   <div class="header-item-blog">
//     ${blog_1.title}
//   </div>
//   <hr>
//   <div class="information-item-blog">
//     <span class="information-item-blog-user">
//       <i class="bi bi-person-circle"></i>
//       ${blog.writer}
//     </span>
//     &nbsp;
//     &nbsp;
//     <span class="information-item-blog-calendar">
//       <i class="bi bi-calendar2-week-fill"></i>
//       ${blog.calendar}
//     </span>
//   </div>
//   <br>
//   <div class="desc-item-blog">
//   در حال حاضر افزونه‌های گوگل کروم زیادی وجود دارند که برای طراحان وب ساخته شدند. طراحان وب با استفاده از این افزونه‌ها می‌توانند تغییرات مورد نظر خود را بر روی وب سایت‌های مختلفی اعمال کرده و همچنین دیتا‌های گرافیکی زیادی را از وب‌سایت‌های مورد نظر خود به دست بیاورند. بهترین افزونه کروم برای طراحی وب چیست؟ در ادامه مطلب انواع افزونه کروم برای طراحان وب را معرفی می‌کنیم و همچنین به شما می‌گویم که افزونه‌ های مهم کروم در برنامه‌ نویسی و طراحی وب سایت کدام‌اند.
//   <br>
//   <br>
//   <span></span>
//   Awesome Screenshot
//   <br>
//   اولین افزونه کروم برای طراحان وب Awesome Screenshot است. طراحی وب با استفاده از این افزونه می‌توانید از صفحات مختلف وب سایت اسکرین بگیرد. همچنین علاوه بر اسکرین شات قابلیت گرفتن ویدئو از صفحات و تغییر اندازه تصاویر ثبت شده نیز در این افزونه وجود دارد. پس به راحتی می‌توانند تصاویر و ویدئوهای به ثبت رسیده توسط افزونه را دانلود و در سیستم خود ذخیره کنید. همچنین تعدادی ابزار نوشتاری و آپشن‌های برای تار و شفاف کردن تصاویر و ویدئوها نیز در این افزونه وجود دارد.
//   <br>
//   <br>
//   qSnap
//   <br>
//   این افزونه نیز همانند افزونه قبلی قابلیت ثبت اسکرین شات را برای طراحان وب فراهم کرده است. با استفاده از این افزونه می‌توانید از صفحات وب‌سایت‌های مختلف در مرورگر‌های کروم، فایرفاکس و اینترنت اکسپلور اسکرین‌شات تهیه کنید. در این افزونه قابلیت ثبت هم‌زمان چند تصویر و حاشیه‌نویسی بر روی آن‌ها وجود دارد. همچنین به راحتی با استفاده از این افزونه می‌توانید چند تصویر را در یک قاب کنار هم قرار دهید و آن‌ها را با یکدیگر مقایسه کنید. در آخر نیز باید به قابلیت اشتراک‌گذاری تصاویر ثبت شده در شبکه‌های اجتماعی نیز اشاره کنیم که در این پلاگین وجود دارد.
//   <br>
//   <br>
//   Colorzilla
//   <br>
//   به عنوان دیگر افزونه برای طراحان وب می‌توانیم به Colorzilla اشاره کنیم. Colorzilla این قابلیت را برای شما فراهم می‌کند که بتوانید کد HEX رنگ‌های مختلف موجود در صفحات وب سایت را پیدا کنید. این افزونه رنگ‌های موجود در هر صفحه را به صورت نقطه‌ای شناسایی می‌کند و کد مربوط به آن را در اختیار شما قرار می‌دهد. به راحتی می‌توانید این کد‌ها را در بخش طراحی صفحات وب سایت و اپلیکیشن کپی کنید.
//   <br>
//   <br>
//   Picmonkey
//   <br>
//   Picmonkey گزینه‌ای از بهترین افزونه کروم برای طراحی وب است که کاربران بسیار زیادی را به خود اختصاص داده است. این پلاگین قابلیت‌هایی از قبیل برش، فیلتر کردن، چرخش، کادر‌بندی، تغییر بافت و مواردی از این قبیل‌ها برای اسکرین شات‌های ثبت شده در اختیار شما قرار می‌دهد. با استفاده از این افزونه به راحتی می‌توانید اسکرین شات از صفحات گرفته و آن‌ها را بسته به سطح نیاز و سلیقه خود ادیت کنید.
//   <br><br><br><br>
//   </div>
//     `);
//   item_blog.appendChild(content);
// });
// close_item_blog.addEventListener("click", function () {
  
//   item_blog.setAttribute("style", "top: -35rem;");
//   body.setAttribute("style", "overflow-y: scroll;");
//   nav.setAttribute("style", "box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0)");
//   item_blog.innerHTML = `
//   <div class="close-item-blog">
//   <i class="bi bi-x-lg"></i>
// </div>
// `;
// });
