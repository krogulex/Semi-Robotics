var status = "less";

function toggleText()
{
    if (status == "less") {
        document.getElementById("about__text_extended").innerHTML = "Urządzenie dostosowuje się do osoby karmionej, jej postawy oraz tempa spożywania posiłku. Robot Karmiący to połączenie najnowszej technologii, sztucznej inteligencji oraz zaawansowanego oprogramowania.";
        document.getElementById("about__button").innerText = "Mniej";
        status = "more";
    } else if (status == "more") {
        document.getElementById("about__text_extended").innerHTML = "";
        document.getElementById("about__button").innerText = "Więcej";
        status = "less"
    }
}