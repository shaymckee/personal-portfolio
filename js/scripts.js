var currentCard = 1;

$("#prev").on("click", function () {
    var windowWidth = $(window).width()
    if (windowWidth > 1000) {
        var width = document.getElementById('card-1').offsetWidth;
        $("#menu ul").animate(
            {
                scrollLeft: `-=${width + 12}`,
            },
            300,
            "swing"
        );
    } else {
        if (currentCard !== 1) currentCard--;;
        var element = document.getElementById("card-" + currentCard);

        if (windowWidth < 600) {
            var blockStatus = "end";
        } else {
            var blockStatus = "center";
        }

        element.scrollIntoView({behavior: "smooth", block: blockStatus, inline: "center"});
    }
});

$("#next").on("click", function () {
    var windowWidth = $(window).width()
    if (windowWidth > 1000) {
        var width = document.getElementById('card-1').offsetWidth;
    $("#menu ul").animate(
        {
            scrollLeft: `+=${width + 12}`,
        },
        300,
        "swing"
    );
    } else {
        if (currentCard !== 6) currentCard++;;
        var element = document.getElementById("card-" + currentCard);

        if (windowWidth < 600) {
            var blockStatus = "end";
        } else {
            var blockStatus = "center";
        }
        element.scrollIntoView({behavior: "smooth", block: blockStatus, inline: "center"});
    }
});