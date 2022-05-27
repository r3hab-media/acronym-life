//template object
/*
, {
    short: ``,
    long: ``
  }
*/
const shortCodes = [
  {
    //common text abbreviations
    short: `ttfn`,
    long: `ta ta for now`
  },
  {
    short: `bc`,
    long: `because`
  },
  {
    short: `rofl`,
    long: `rolling on floor laughing`
  },
  {
    short: `stfu`,
    long: `shut the f**k up`
  },
  {
    short: `icymi`,
    long: `in case you missed it`
  },
  {
    short: `tldr`,
    long: `too long didn't read`
  },
  {
    short: `lmk`,
    long: `let me know`
  },
  {
    short: `lyk`,
    long: `let you know`
  },
  {
    short: `nvm`,
    long: `nevermind`
  },
  {
    short: `tgif`,
    long: `thank goodness it's Friday`
  },
  {
    short: `tbh`,
    long: `to be honest`
  },
  {
    short: `tbf`,
    long: `to be frank`
  },
  {
    short: `rn`,
    long: `right now`
  },
  {
    short: `qotd`,
    long: `quote of the day`
  },
  {
    short: `ootd`,
    long: `outfit of the day`
  },
  {
    short: `brb`,
    long: `be right back`
  },
  {
    short: `btw`,
    long: `by the way`
  },
  {
    short: `lol`,
    long: `laugh out loud`
  },
  {
    short: `ttyl`,
    long: `talk to you later`
  },
  {
    short: `hmu`,
    long: `hit me up`
  },
  {
    short: `fwiw`,
    long: `for what it's worth`
  },
  {
    short: `imo`,
    long: `in my opinion`
  },
  {
    short: `imho`,
    long: `in my humble opinion`
  },
  {
    short: `idk`,
    long: `I don't know`
  },
  {
    short: `tba`,
    long: `to be announced`
  },
  {
    short: `tbd`,
    long: `to be decided`
  },
  {
    short: `bff`,
    long: `best friend forever`
  },
  {
    short: `omw`,
    long: `on my way`
  },
  {
    short: `yolo`,
    long: `you only live once`
  },
  {
    short: `nsfw`,
    long: `not safe for work`
  },
  {
    short: `wtf`,
    long: `what the f**k`
  },
  {
    short: `smh`,
    long: `scratching my head`
  },
  {
    short: `jk`,
    long: `just kidding`
  },
  {
    short: `rbtl`,
    long: `read between the lines`
  },
  {
    short: `wywh`,
    long: `wish you were here`
  },
  {
    short: `fwb`,
    long: `friends with benefits`
  },
  {
    short: `glhf`,
    long: `good luck have fun`
  },
  {
    short: `gnoc`,
    long: `get naked on camera`
  },
  {
    short: `nifoc`,
    long: `naked in front of computer`
  },
  {
    short: `ipn`,
    long: `I'm posting naked`
  },
  {
    short: `wttp`,
    long: `want to trade pictures`
  },
  {
    short: `tdtm`,
    long: `talk dirty to me`
  },
  {
    short: `pos`,
    long: `parent over shoulder`
  },
  {
    short: `9`,
    long: `parent watching`
  },
  {
    short: `cd9`,
    long: `code 9, parents around`
  },
  {
    short: `99`,
    long: `parents gone`
  },
  {
    short: `lmirl`,
    long: `let's meet in real life`
  },
  {
    short: `irl`,
    long: `in real life`
  },
  {
    short: `iwsn`,
    long: `I want sex now`
  },
  {
    short: `cu46`,
    long: `see you for sex`
  },
  {
    short: `gypo`,
    long: `get your pants off`
  },
  {
    short: `420`,
    long: `marijuana`
  },
  {
    short: `doc`,
    long: `drug of choice`
  },
  {
    //business abbreviations
    short: `eod`,
    long: `end of day`
  },
  {
    short: `faq`,
    long: `frequently asked question`
  },
  {
    short: `aka`,
    long: `also known as`
  },
  {
    short: `asap`,
    long: `as soon as possible`
  },
  {
    short: `diy`,
    long: `do it yourself`
  },
  {
    short: `lmgtfy`,
    long: `let me Google that for you`
  },
  {
    short: `np`,
    long: `no problem`
  },
  {
    short: `n/a`,
    long: `not applicable or not available`
  },
  {
    short: `na`,
    long: `not applicable or not available`
  },
  {
    short: `ooo`,
    long: `out of office`
  },
  {
    short: `tia`,
    long: `thanks in advance`
  },
  {
    short: `lmc`,
    long: `let me check`
  },
  {
    //romantic text abbreviations
    short: `ily`,
    long: `I love you`
  },
  {
    short: `mcm`,
    long: `man crush Monday`
  },
  {
    short: `wcw`,
    long: `woman crush Wednesday`
  },
  {
    short: `bf`,
    long: `boyfriend`
  },
  {
    short: `gf`,
    long: `girlfriend`
  }
];

function searchCode() {
  const txt = searchTxt.value.toLowerCase();
  const foundCode = shortCodes.find((long) => long.short === txt);
  // output.innerHTML = foundCode ? foundCode.long : `We don't know that one!`;

  if (foundCode) {
    output.innerHTML = foundCode.long;
    output.classList.add('success');
  } else if (!foundCode) {
    output.innerHTML = `We don't know that one.`;
    output.classList.add('error');
    output.classList.remove('success');
  } else {
    return;
  }
}

var currYr = new Date().getFullYear();
thisYear.textContent = currYr;

//check for duplicates
const lookup = shortCodes.reduce((a, e) => {
  a[e.short] = ++a[e.short] || 0;
  return a;
}, {});

console.log(shortCodes.filter(e => lookup[e.short]));