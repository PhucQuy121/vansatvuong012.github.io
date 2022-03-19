function projectcode(){
    var word = ['A','B','C','D','E','F','G','H','I','J','K','M','N','O','P','Z','X','V','S','L','Q','W','R','T','Y','U',
            'a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','z','x','v','s','l','q','w','r','t','y','u',
            1,2,3,4,5,6,7,8,9        
        ];
    var getWord = [];
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    for(var i=0;i<4;++i){
        if(Array.isArray(getWord)){
            getWord.push(word[getRandomInt(0, 60)]);
        } else{getWord = [word[getRandomInt(0, 60)]];}
    }
    var projectcode = document.querySelector('.projectcode');
    projectcode.innerText = getWord.toString().replace(/,/g,'');

    //btn refresh
    var refresh = document.querySelector('.refresh');
    refresh.onclick = function(e){
        getWord = [];
        for(var i=0;i<4;++i){
            if(Array.isArray(getWord)){
                getWord.push(word[getRandomInt(0, 60)]);
            } else{getWord = [word[getRandomInt(0, 60)]];}
        }
        projectcode.innerText = getWord.toString().replace(/,/g,'');
    };

    //input
    var inputElement = document.querySelector('.search-input-item');
    function getParent(element, selector){
        while(element){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    inputElement.oninput = function(e){
        var btnSearch = document.querySelector('.search-button');
        btnSearch.onclick = function(e){
            var searchValues = getParent(inputElement,'.search').querySelector('.search-output__text-input');
            searchValues.innerText  = inputElement.value;
        };
    };
    
    //Test
    var e = 'abcd', f = ['a','b','c','d'];
    if(e===f.toString().replace(/,/g,'')){
        console.log('True');
    } else{console.log('False');}

}