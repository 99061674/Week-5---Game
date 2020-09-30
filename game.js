var vraag1 = prompt('Je krijgt de bal, wat doe je ermee? (pasen of dribbelen)?'); 
if(vraag1 == "pasen"){
    var vraag2 = prompt('Het middenveld krijgt de bal, spelen ze naar voor of achter?');
    if(vraag2 == "naar voor"){
        var vraag4 = prompt('De aanvaller neemt de bal aan , rent die door naar het goal of paast die eerst terug naar achter?');
        if (vraag4 == "naar het goal"){
             document.write('GGGOOAAALLL!!!!');
        } else if (vraag4 == "paast naar achter") {
            document.write('de bal is terug naar achter en het hele team houd weer rust');
        }
    } else if (vraag2 =="naar achter"){
        var vraag5 = prompt('De bal is weer terug het spel in paas je naar de keeper of weer terug naar voren (middenveld)?');
        if (vraag5 == "naar de keeper") {
            document.write('De keeper neemt de bal aan en paast weer naar de verdediging en het spel gaat verder. ');

        } else if (vraag5 == "terug naar voren"){
            document.write('de bal is weer in het veld en het spel gaat weer verder.');
        }
        

    }
    
} else if (vraag1 =="dribbelen"){
    var vraag3 = prompt('Je dribbelt naar het middenveld, paas je naar voren of blijf je rust houden?');
    if (vraag3 == "rust houden"){
        var vraag6 = prompt('De tegenstander zet druk, ren je er naar toe of geef je op?');
        if (vraag6 == "ren er naar toe"){
            document.write('Je bent te langzaam de aanvaller is te snel');
        } else if (vraag6 == "opgeven"){
            document.write("De tegenstander scoort");
            
        }
    } else if (vraag3 == "naar voor"){
        var vraag7 = prompt('je teamgenoot rent met de bal naar het goal schiet die zelf of doet die een 1, 2tje?');
        if (vraag7 == "1,2 tje"){
            document.write('Je paaste te zacht en de tegnstander heeft hem gepakt');
        }  else if (vraag7 == "zelf schieten"){
            document.write('GGOOAAALLL!!!!!!!!')
        }
    } 
}