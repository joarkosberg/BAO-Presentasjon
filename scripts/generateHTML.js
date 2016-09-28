$(function () {
    // variables
    var memberList = [
        {"name": "Marius Stokseth", "studie": "Interaktivt design", "imgSrc": "marius.jpg", "E-mail": "stomar14@student.westerdals.no", "Github": ""},
        {"name": "André Bellefine Lindeløff", "studie": "Interaktivt design", "imgSrc": "andre.jpg"},
        {"name": "Erik Bakkejord", "studie": "Interaktivt design", "imgSrc": "erik.png"},
        {"name": "Lars Dahl", "studie": "Programmering", "imgSrc": "lars.jpg", "git": "https://github.com/laerdh"},
        {"name": "Joar Kosberg", "studie": "Programmering", "imgSrc": "joar.jpg", "git": "https://github.com/joarkosberg"}
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
            var git = this.git;

            var $article;
            if(count == 4){
                $article = $("<article>").addClass("col-md-4 col-md-offset-2 col-sm-12");
            } else {
                $article = $("<article>").addClass("col-md-4 col-sm-12");
            }

            var $img = $("<img>").attr(
                {
                    src: "img/" + imgSrc,
                    alt: name,
                }
            );
            var $name = $("<h4>").html(name);
            var $study = $("<h5>").html(study);
            var $git = $("<a href=''>").html(git);

            $article.append(
                $img,
                $name,
                $study,
                $git
            );
            memberSection.append($article);

        });
        $("img", memberSection).addClass("img-responsive img-thumbnail");


    }

});