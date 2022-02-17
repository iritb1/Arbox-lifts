import React, { useEffect , useMemo} from 'react';
import { connect } from 'react-redux';
import './lift.scss';

const Lift = ({ floor , QueueCalls}) => {

  const flr = floor;
  const queue = QueueCalls;

  var travelDistance = {
    'G': 80,
    '1':150,
    '2':220,
    '3':290,
    '4':360,
    '5':430,
    '6':500,
    '7':570,
    '8':640,
    '9':710

  };

  var currentLocation = useMemo (() => {
    return { '0': 0,'1': 0,'2': 0,'3': 0,'4': 0,}
  },[]);



  function calculatDistance(elevator){
    var totalDistance;
    var dstLocation = travelDistance[floor];
    var crtLocation = currentLocation[elevator.toString()];

    totalDistance = Math.abs(crtLocation - dstLocation);
    currentLocation[elevator.toString()] = totalDistance;
  }

  useEffect(() => {
    const persons = document.getElementsByClassName('person');//document.querySelector('.person');
    //console.log(document.getElementsByClassName('person'));
    console.log(currentLocation);
    for(let index = 0; index < persons.length ; index ++){
      switch (flr) {
        case 'G':
          persons[index].style.bottom = 80 + 'px';
          //persons[index].style.backgroundImage = "url('https://files.geektime.co.il/wp-content/uploads/2020/11/new-google-photos-logo-1604824480.jpg')"//'../../images/green_elevator.png')";
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '1':
          persons[index].style.bottom = 150 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '2':
          persons[index].style.bottom = 220 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '3':
          persons[index].style.bottom = 290 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '4':
          persons[index].style.bottom = 360 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '5':
          persons[index].style.bottom = 430 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '6':
          persons[index].style.bottom = 500 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '7':
          persons[index].style.bottom = 570 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '8':
          persons[index].style.bottom = 640 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        case '9':
          persons[index].style.bottom = 710 + 'px';
          persons[index].addEventListener( 
            'webkitTransitionEnd', 
            function( event ) { 
                console.log(event); 
            }, false );
          calculatDistance(index);
          break
        default:
          persons[index].style.bottom = 5 + 'px';
          //calculatDistance(index);
      }
    }
    console.log(currentLocation);
    
  }, [flr])

  return (
    <div className="person"></div>
  )
}
const mapStateToProps = (state) => ({
  floor: state.buttonReducer.floor,
})
export default connect(mapStateToProps)(Lift);
