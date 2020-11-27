((d,w) => {

    let box = d.getElementById('box-1');
    let handle = d.getElementById('handle');

    let newClass = () => {
     box.classList.add('slide');
     handle.classList.add('handle-slide')
    };

     box.addEventListener('click', newClass);
    // d.addEventListener('mousedown', function() {
    //     let parent = d.querySelector('.splitview'),
    //         topPanel = parent.querySelector('.top'),
    //         handle = parent.querySelector('.handle'),
           
    //         delta = 0;
            


    //     parent.addEventListener('mousemove', function(event) {
             
        
               
           
            // Get the delta between the mouse position and center point.
            // delta = (event.clientX - w.innerWidth / 2) * 0.5;
            
            // Move the handle.
            // handle.style.left = event.clientX + delta + 'px';

            // Adjust the top panel width.
            // topPanel.style.width = event.clientX  + delta + 'px';


       
        
    // });

      
    // });

   

}) (document, window);



