/*
Copyright amir javanmir
Released on: May 21, 2025
*/
window.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".newsContent");
    const toc = document.querySelector(".tableOfContent");

    const headings = document.querySelectorAll("h2");
    if (headings.length === 0) {
        toc.innerHTML = `<p>عنوانی برای نمایش وجود ندارد!</p>`;
    } else {
        const ul = document.createElement("ul");
        let clickHead = null;
        headings.forEach(heading => {
            if (!heading.id) {
                heading.id = `section-${Math.round(Math.random() * 10000)}`;
            }
            const li = document.createElement("li");
            li.textContent = heading.textContent;

            li.addEventListener("click", function () {
                const headingTop = heading.getBoundingClientRect().top + window.scrollY;
                if (clickHead) {
                    clickHead.classList.remove("active");
                }
                heading.classList.add("active");
                const offset = 30;

                window.scrollTo({
                    top: headingTop - offset,
                    behavior: "smooth"
                })
            })
            ul.appendChild(li);
        })
        toc.appendChild(ul);

        headings.forEach(function (heading) {
            const arrow = document.createElement("span");
            arrow.textContent = "↑";
            arrow.className = "scroll-to-toc";
            arrow.title = "رفتن به فهرست";

            arrow.addEventListener("click", function (e) {
                e.preventDefault();
                toc.scrollIntoView({ behavior: "smooth" });
            })
            heading.insertBefore(arrow, heading.childNodes[0]);
        })
    }
})