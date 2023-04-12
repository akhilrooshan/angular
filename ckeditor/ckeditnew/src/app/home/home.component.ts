import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as customEditor from '../build/ckeditor.js';
import { customColorPalette } from '../../assets/colorPalette/customColorPalette';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

const items = [
  { id: '@swarley', userId: '1', text: 'Barney Stinson', link: 'https://www.imdb.com/title/tt0460649/characters/nm0000439' },
  { id: '@lilypad', userId: '2', text: 'Lily Aldrin', link: 'https://www.imdb.com/title/tt0460649/characters/nm0004989' },
  { id: '@marry', userId: '3', text: 'Marry Ann Lewis', link: 'https://www.imdb.com/title/tt0460649/characters/nm1130627' },
  { id: '@marshmallow', userId: '4', text: 'Marshall Eriksen', link: 'https://www.imdb.com/title/tt0460649/characters/nm0781981' },
  { id: '@rsparkles', userId: '5', text: 'Robin Scherbatsky', link: 'https://www.imdb.com/title/tt0460649/characters/nm1130627' },
  { id: '@tdog', userId: '6', text: 'Ted Mosby', link: 'https://www.imdb.com/title/tt0460649/characters/nm1102140' }
];

export class UploadAdapter {
  private loader;
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
          resolve({ default: myReader.result });
        }

        myReader.readAsDataURL(file);
      }));
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieName: any = []
  moviePlot:any=[]
  movieImg:any=[]


  constructor(private movieService: ApiserviceService, private router: Router) {

   
}


  ngOnInit(): void {
    this.movieService.getData().subscribe((datan: any) => {
      this.movieName = datan.data.map(x => '#' + x.movieName)  
      this.moviePlot=datan.data.map(x=>'$'+x.plot)
      this.movieImg=datan.data.map(x=>'@'+x.image)

      

    })

  }

  

  content: string = ''

  public Editor = customEditor;
  config = {
    removePlugins: ['Title'],
    toolbar: {
      items: [
        // 'exportPdf',
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'alignment',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'outdent',
        'indent',
        '|',
        'todoList',
        'link',
        'imageUpload',
        'insertTable',
        'highlight',
        '|',
        'horizontalLine',
        'imageInsert',
        'pageBreak',
        // 'specialCharacters'
        // 'restrictedEditing',
      ]
    },
    language: 'en',
    restrictedEditing: {
      allowedCommands: ['pageBreak', 'mention', 'imageUpload']
    },
    fontColor: {
      colors: customColorPalette
    },
    fontBackgroundColor: {
      colors: customColorPalette
    },
    highlight: {
      options: [
        {
          model: 'blueMarker',
          class: 'marker-blue',
          title: 'Comment',
          color: 'var(--ck-highlight-marker-blue)',
          type: 'marker'
        }]
    }, image: {
      insert: {
        type: 'block' // all images inserted into the editor will be block
      },
      toolbar: [
        'imageTextAlternative',
        'imageStyle:block',
        'imageStyle:inline',
        'imageStyle:side',
        'resizeImage:50',
        'resizeImage:75',
        'resizeImage:original'
      ],
      resizeOptions: [
        {
          name: 'resizeImage:original',
          value: null,
          icon: 'original'
        },
        {
          name: 'resizeImage:50',
          value: '50',
          icon: 'medium'
        },
        {
          name: 'resizeImage:75',
          value: '75',
          icon: 'large'
        }
      ]
    },
    mention: {
      feeds: [
        {
          marker: '#',
          feed:() => this.getMovieName(),
          minimumCharacters: 0
        },
        {
          marker: '@',
          // feed:['@thazil','@akhil','@ashwini','@magesh','@avinash','@anil','@pawan','@yuvraj','@deeksha'],
          
          feed:this.getFeedItems,

          minimumCharacters: 0
        },
        {
          marker: '$',
          feed:() => this.getMoviePlot(),
          minimumCharacters: 0
        }
      ]
    },
    


}
  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      console.log('loader : ', loader)
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }
  getMovieName(){
    return this.movieName
  }
  getMoviePlot(){
    return this.movieImg
  }

   getFeedItems( queryText ) {
    // As an example of an asynchronous action, return a promise
    // that resolves after a 100ms timeout.
    // This can be a server request or any sort of delayed action.
    return new Promise( resolve => {
        setTimeout( () => {
            const itemsToDisplay = items
                // Filter out the full list of all items to only those matching the query text.
                .filter( isItemMatching )
                // Return 10 items max - needed for generic queries when the list may contain hundreds of elements.
                .slice( 0, 10 );

            resolve( itemsToDisplay );
        }, 100 );
    } );

    // Filtering function - it uses the `name` and `username` properties of an item to find a match.
    function isItemMatching( item ) {
        // Make the search case-insensitive.
        const searchString = queryText.toLowerCase();

        // Include an item in the search results if the name or username includes the current user input.
        return (
            item.text.toLowerCase().includes( searchString ) 
        );
    }
  }
// }

//  customItemRenderer( item ) {
//   const itemElement = document.createElement( 'span' );

//   itemElement.classList.add( 'custom-item' );
//   itemElement.id = `mention-list-item-id-${ item.userId }`;
//   itemElement.textContent = `${ item. } `;

//   const usernameElement = document.createElement( 'span' );

//   usernameElement.classList.add( 'cusnametom-item-username' );
//   usernameElement.textContent = item.id;

//   itemElement.appendChild( usernameElement );

//   return itemElement;
// }

}
