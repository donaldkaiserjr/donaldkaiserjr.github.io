'use strict'



$(document).ready(function() {

    $("button").on('click', function() {
        const $randInt = Math.ceil(Math.random() * 87);
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${$randInt}.json`, function(data) {
            $(".character-img").attr("src", data['image'])
            $("h3.name").text(data['name'])
            $(".affiliations-0").text(data['affiliations'][0])
            $(".affiliations-1").text(data['affiliations'][1])
            $(".affiliations-2").text(data['affiliations'][2])
            $(".affiliations-3").text(data['affiliations'][3])            
        })

    })
})

