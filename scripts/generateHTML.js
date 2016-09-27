$(function () {
    // variables
    var memberList = [
        {"name": "Marius Stokseth", "studie": "Interaktivt design", "imgSrc": "He-man.png"},
        {"name": "André Bellefine Lindeløff", "studie": "Interaktivt design", "imgSrc": "He-man.png"},
        {"name": "Erik Bakkejord", "studie": "Interaktivt design", "imgSrc": "skeletor.jpg"},
        {"name": "Lars Dahl", "studie": "Programmering", "imgSrc": "He-man.png"},
        {"name": "Joar Kosberg", "studie": "Programmering", "imgSrc": "skeletor.jpg"}
    ];
    // HTML Objects
    var memberSection;

    // init
    var init = function () {
        // set HTML-objects
        memberSection = $("#membersContainer");
        // set events
        console.log("init works");
        // on page load
        setMembers();
    }(); // end init

    // support functions


    function setMembers() {
        var count = 0;
        $.each(memberList, function () {
            count++;
            var name = this.name;
            var study = this.studie;
            var imgSrc = this.imgSrc;

            var $article;
            if(count == 4){
                $article = $("<article>").addClass("col-md-4 col-md-offset-2 col-sm-12");
            } else {
                $article = $("<article>").addClass("col-md-4 col-sm-12");
            }

            var $img = $("<img>").attr(
                {
                    src: "img/" + imgSrc
                }
            );
            var $name = $("<h4>").html(name);
            var $study = $("<h5>").html(study);

            $article.append(
                $img,
                $name,
                $study
            );
            memberSection.append($article);

        });
        //$("article", memberSection).addClass("col-md-4 col-sm-12");
        $("img", memberSection).addClass("img-responsive img-thumbnail");


    }

});