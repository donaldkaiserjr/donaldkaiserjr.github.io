'use strict'



$(document).ready(function() {

    $("button").on('click', function() {
        let $randInt = Math.ceil(Math.random() * 88);
        $.get(`https://akabab.github.io/starwars-api/api/id/${$randInt}.json`, function(data) {
            $("h3.name").text(data['name'])
            $(".character-img").attr("src", data['image'])
            $(".affiliations-0").text(data['affiliations'][0])
            $(".affiliations-1").text(data['affiliations'][1])
            $(".affiliations-2").text(data['affiliations'][2])
            $(".affiliations-3").text(data['affiliations'][3])            
        })

    })
})

