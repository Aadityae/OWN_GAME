class Security {

    constructor(){

        this.title = createElement('h2');
        this.note = createElement('h2')

        this.button1 = createButton('Sunrise');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        

        this.button2 = createButton('Day');
        this.button2.position(100,220);
        this.button2.style('background', 'lightgrey');


        this.button3 = createButton('Sunset');
        this.button3.position(100,420);
        this.button3.style('background', 'lightgrey');

        this.button4 = createButton('Night');
        this.button4.position(100,520);
        this.button4.style('background', 'lightgrey');

        this.reset = createButton('Reset');
        this.reset.position(100,920);
        this.reset.style('background', 'lightgrey');

        this.button5 = createButton('Build House And Plant trees');
        this.button5.position(600,220);
        this.button5.style('background', 'lightgrey');
        this.button6 = createButton('Finish Task');
        this.button6.position(600,720);
        this.button6.style('background', 'lightgrey');
        
        
    }

    

    display(){
    
    

    
      
     this.button1.mousePressed(() =>
     {
         background(sunrise)
         this.button1.hide()
         this.button2.hide()
         this.button3.hide()
         this.button4.hide()

         this.button5.mousePressed(() =>
         {
             background(houseSunrise)
             this.button5.hide()
             gameState = WIN
             this.button6.mousePressed(() =>
             {
               gameState = LAST
               security.hide()
               
             })
             this.reset.mousePressed(() =>
             {
                 background(230)
                this.button1 = createButton('Sunrise');
                this.button1.position(100,120);
                this.button1.style('background', 'lightgrey');    
        
                
        
                this.button2 = createButton('Day');
                this.button2.position(100,220);
                this.button2.style('background', 'lightgrey');
        
        
                this.button3 = createButton('Sunset');
                this.button3.position(100,420);
                this.button3.style('background', 'lightgrey');
        
                this.button4 = createButton('Night');
                this.button4.position(100,520);
                this.button4.style('background', 'lightgrey');
        
                this.reset = createButton('Reset');
                this.reset.position(100,920);
                this.reset.style('background', 'lightgrey');
        
                this.button5 = createButton('Build House And Plant trees');
                this.button5.position(600,220);
                this.button5.style('background', 'lightgrey');
        
                this.button6 = createButton('Finish Task');
                this.button6.position(600,720);
                this.button6.style('background', 'lightgrey');
                gameState = 0
             })
         })
     })

     this.button2.mousePressed(() =>
     {
         background(day)
         this.button1.hide()
         this.button2.hide()
         this.button3.hide()
         this.button4.hide()

         this.button5.mousePressed(() =>
         {
             background(houseDay)
             this.button5.hide()
             gameState = WIN

             this.button6.mousePressed(() =>
  {
    gameState =LAST
    security.hide()
   
  })

             this.reset.mousePressed(() =>
             {
                 background(230)
                this.button1 = createButton('Sunrise');
                this.button1.position(100,120);
                this.button1.style('background', 'lightgrey');    
        
                
        
                this.button2 = createButton('Day');
                this.button2.position(100,220);
                this.button2.style('background', 'lightgrey');
        
        
                this.button3 = createButton('Sunset');
                this.button3.position(100,420);
                this.button3.style('background', 'lightgrey');
        
                this.button4 = createButton('Night');
                this.button4.position(100,520);
                this.button4.style('background', 'lightgrey');
        
                this.reset = createButton('Reset');
                this.reset.position(100,920);
                this.reset.style('background', 'lightgrey');
        
                this.button5 = createButton('Build House And Plant trees');
                this.button5.position(600,220);
                this.button5.style('background', 'lightgrey');
        
                this.button6 = createButton('Finish Task');
                this.button6.position(600,720);
                this.button6.style('background', 'lightgrey');
                gameState = 0
             })
         })
     })

     this.button3.mousePressed(() =>
     {
         background(sunset)
         this.button1.hide()
         this.button2.hide()
         this.button3.hide()
         this.button4.hide()

         this.button5.mousePressed(() =>
         {
             background(houseSunset)
             this.button5.hide()
             gameState = WIN
             
             this.button6.mousePressed(() =>
  {
    gameState = LAST
    security.hide()
  
  })
             this.reset.mousePressed(() =>
             {
                 background(230)
                this.button1 = createButton('Sunrise');
                this.button1.position(100,120);
                this.button1.style('background', 'lightgrey');    
        
                
        
                this.button2 = createButton('Day');
                this.button2.position(100,220);
                this.button2.style('background', 'lightgrey');
        
        
                this.button3 = createButton('Sunset');
                this.button3.position(100,420);
                this.button3.style('background', 'lightgrey');
        
                this.button4 = createButton('Night');
                this.button4.position(100,520);
                this.button4.style('background', 'lightgrey');
        
                this.reset = createButton('Reset');
                this.reset.position(100,920);
                this.reset.style('background', 'lightgrey');
        
                this.button5 = createButton('Build House And Plant trees');
                this.button5.position(600,220);
                this.button5.style('background', 'lightgrey');
        
                this.button6 = createButton('Finish Task');
                this.button6.position(600,720);
                this.button6.style('background', 'lightgrey');
                gameState = PLAY
             })
         })
     })

     this.button4.mousePressed(() =>
     {
         background(night)
         this.button1.hide()
         this.button2.hide()
         this.button3.hide()
         this.button4.hide()


         this.button5.mousePressed(() =>
         {
             background(houseNight)
             this.button5.hide()
           gameState = WIN

           this.button6.mousePressed(() =>
  {
    gameState = LAST
    security.hide()
   
  })
             this.reset.mousePressed(() =>
             {
                 background(230)
                this.button1 = createButton('Sunrise');
                this.button1.position(100,120);
                this.button1.style('background', 'lightgrey');    
        
                
        
                this.button2 = createButton('Day');
                this.button2.position(100,220);
                this.button2.style('background', 'lightgrey');
        
        
                this.button3 = createButton('Sunset');
                this.button3.position(100,420);
                this.button3.style('background', 'lightgrey');
        
                this.button4 = createButton('Night');
                this.button4.position(100,520);
                this.button4.style('background', 'lightgrey');
        
                this.reset = createButton('Reset');
                this.reset.position(100,920);
                this.reset.style('background', 'lightgrey');
        
                this.button5 = createButton('Build House And Plant trees');
                this.button5.position(600,220);
                this.button5.style('background', 'lightgrey');
        
                this.button6 = createButton('Finish Task');
                this.button6.position(600,720);
                this.button6.style('background', 'lightgrey');
                gameState = 0
             })
         })
     })
     

    }
    hide()
    {
        this.button1.hide()
        this.button2.hide()
         this.button3.hide()
         this.button4.hide()
         this.button5.hide()
         this.button6.hide()
    }
}