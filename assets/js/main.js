(function(){
    // Theme switch
    const root = document.body;
    const themeSwitch = document.getElementById("mood");
    const themeData = root.getAttribute("data-theme");

    if (themeSwitch) {
        initTheme(localStorage.getItem("theme"));
        themeSwitch.addEventListener("click", () =>
            toggleTheme(localStorage.getItem("theme"))
        );

        function toggleTheme(state) {
            if (state === "light") {
                localStorage.setItem("theme", "dark");
                root.removeAttribute("data-theme");
            } else if (state === "dark") {
                localStorage.setItem("theme", "light");
                document.body.setAttribute("data-theme", "light");
            } else {
                initTheme(state);
            }
        }

        function initTheme(state) {
            if (state === "light") {
                document.body.setAttribute("data-theme", "dark");
            } else if (state === "dark") {
                root.removeAttribute("data-theme");
            } else {
                localStorage.setItem("theme", themeData);
            }
        }
    }

    var d = document,
        tabs = d.querySelector('.icon-menu'),
        tab  = d.querySelectorAll("li"),
        sections = d.querySelectorAll('.section-tab');

        tabs.addEventListener("click", function (e){
            if(e.target && (e.target.nodeName === "LI" || e.target.nodeName === "H2")){
                // add class on tab when change tabs
                for (var i = 0; i < tab.length; i++){
                    tab[i].classList.remove('active');
                }
                e.target.classList.toggle('active');

                // add class on section when change tabs
                for ( var i = 0; i < sections.length; i++){
                    sections[i].classList.remove("active");
                }

                var tabId = '#' + e.target.dataset.tabId;
                d.querySelector(tabId).classList.toggle('active');
            }
        });
})();