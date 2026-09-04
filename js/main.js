(function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    var links = document.querySelectorAll('.site-nav a');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open);
        });
    }

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            if (nav) nav.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
    });

    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

    if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var id = entry.target.getAttribute('id');
                        navLinks.forEach(function (link) {
                            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                        });
                    }
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
})();
