$(document).ready(function(){
    
    var navbartemplate = $("#navbartemplate").html();
    Mustache.parse(navbartemplate);

    var firstboxtemplate = $("#firstboxtemplate").html();
    Mustache.parse(firstboxtemplate);

    var secondboxtemplate = $("#secondboxtemplate").html();
    Mustache.parse(secondboxtemplate);

    var thirdboxtemplate = $("#thirdboxtemplate").html();
    Mustache.parse(thirdboxtemplate);

    var renderednav = Mustache.render(navbartemplate, {
        navbar: {
            btn1: "Phone",
            btn2: "Pad",
            btn3: "Book",
            btn4: "Shop",
            btn5: "Support",
            btn6: "About",
            btn7: "Cart",
        }
    })

    var rendered = Mustache.render(firstboxtemplate, {
        firstbox: {
            header: "Prioritize privacy.",
            subheader: "Protect yourself from intrusive data collection, malware, spyware, ransomware and more. Keep your data yours.",
            button: "Shop",
        }
    })

    var rendered2 = Mustache.render(secondboxtemplate, {
        secondbox: {
            header: "",
            subheader: "The gang's all here.",
        }
    })

    var rendered3 = Mustache.render(thirdboxtemplate, {
        thirdbox: {
            header: "Protect your data",
            subheader: "Sensitive information stays on your device"
        }
    })

    $("#navbartarget").html(renderednav);
    $("#firstboxtarget").html(rendered);
    $("#secondboxtarget").html(rendered2);
    $("#thirdboxtarget").html(rendered3);

});

$(document).ready(function(){

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('wipeEnter')
            }
        })


    });

    observer.observe(document.querySelector('.wipeEnter'))})