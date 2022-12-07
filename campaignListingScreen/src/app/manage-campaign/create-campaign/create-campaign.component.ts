import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { auditTime, map, startWith } from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import locationData from './json/location.json';
import AudienceData from './json/audienceFilter.json';
import testdata from './json/j.json'
interface campaign {
  value: string;
}
interface location {
  id: number;
  place: string;
}
@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }],
})
export class CreateCampaignComponent implements OnInit {
  firstCtrl: FormControl = new FormControl('', [Validators.required])
  /**
   * @description:Stepper 1 formgroup
   */
  firstFormGroup = new FormGroup({
    firstCtrl: this.firstCtrl
  })
  radius: FormControl = new FormControl('', [Validators.required]);
  control: FormControl = new FormControl('');
  /**
   * @description:stepper 2 form group
   */
  secondFormGroup = new FormGroup({
    control: this.control
  })
  radiusForm = new FormGroup({
    radius: this.radius
  })
  /**
   * @description:stepper 3 form group
   */
  thirdFormGroup = new FormGroup({
  })
  place: FormControl = new FormControl('', [Validators.required]);
  locationDataForm = new FormGroup({
    place: this.place
  })
  isLinear = false;
  campeignCategory: campaign[] = [
    { value: '0' },
    { value: '1' },
    { value: '2' },
  ];
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  audienceCol: string[] = ['Demographic', 'Geographic', 'Commercial']
  filteredStreets: Observable<string[]>;
  // filteredAudience:Observable<string[]>;
  locationArray: location[] = locationData
  Isediting: any = []
  isAudienceTable = false
  isHeadingClicked: any = []
  isCategoryClicked: any = []
  viewDemographicCategories = false;
  viewGeographicCategories = false;
  viewLabelCategories = false;
  viewAgeCategories = false;
  viewGenderCategories = false;
  testArray: any = testdata
  checkedAgedata: any = this.testArray[0].child[0].age
  checkedGenderdata: any = this.testArray[0].child[0].Gender
  ageChipsdata:any=[]
  genderChipsdata:any=[]
  industryValue:any
  categoryValue:any
  selectionDataArray:any=[]
  // ............................................................................
  constructor() {
  }
  ngOnInit(): void {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }
  /**
   * @description:regex function to get string in lowercase without whitespaces
   */
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  onEdit(id: any) {
    this.Isediting[id] = true;
  }
  onSave(id: any) {
    this.Isediting[id] = false;
  }
  onSubmit() {
  }
  /**
   * 
   * @param id :id from the row wants to delete
   * @description:delete function
   */
  onDelete(id: any) {
    for (let i = 0; i < this.locationArray.length; i++) {
      if (this.locationArray[i].id == id) {
        this.locationArray.splice(id, 1);
        return
      }
    }
  }
  AudienceTableAppear() {
    this.isAudienceTable = true;
  }
  AudienceTableDisappear() {
    this.isAudienceTable = false;
  }
  clearMarked(id: any) {
    this.isHeadingClicked = false
  }
  /**
   * 
   * @param i index
   * @description:To make the heading categories appear
   */
  headingCategoriesAppear(i: any) {
    let local: any = localStorage.getItem('industry');
    this.isHeadingClicked[local] = false
    localStorage.setItem('industry', i)
    if (i == 0) {
      this.viewDemographicCategories = true;
      this.viewGeographicCategories = false;
      this.viewLabelCategories = false;
      this.viewGenderCategories = false
      this.viewAgeCategories = false
      this.industryValue="Demography"
    } else if (i == 1) {
      this.viewGeographicCategories = true;
      this.viewDemographicCategories = false;
      this.viewLabelCategories = false;
      this.viewGenderCategories = false
      this.viewAgeCategories = false
      this.industryValue="Geography"
    } else {
      this.viewGeographicCategories = false;
      this.viewDemographicCategories = false;
      this.viewLabelCategories = true;
      this.viewGenderCategories = false
      this.viewAgeCategories = false
      this.industryValue="360 labels"
    }
    this.isHeadingClicked[i] = true;
  }
  /**
   * 
   * @param data subcategories in json file
   * @param i index
   * @description:for appearing the subcategories when a category is clicked
   */
  subcategoriesAppear(i: any) {
    let local: any = localStorage.getItem('category');
    this.isCategoryClicked[local] = false
    localStorage.setItem('category', i)
    if (i === 0) {
      this.viewGenderCategories = false
      this.viewAgeCategories = true;
      this.categoryValue=this.industryValue+"Category 1"
    } else if (i == 1) {
      this.viewAgeCategories = false
      this.viewGenderCategories = true
      this.categoryValue=this.industryValue+"Category 2"
    } else {
      this.viewAgeCategories = false
      this.viewGenderCategories = false
    }
    this.isCategoryClicked[i] = true;
  }
  /**
   * @description:Triggers when apply button is clicked.
   * @param ageChipsdata :to store the selected age checkbox data 
   * @param genderChipsdata :to store the selected gender checkbox data
   */
  applyBtn() {
  this.ageChipsdata=[]
  this.genderChipsdata=[]
    for (let i = 0; i < this.checkedAgedata.length; i++) {
      if (this.checkedAgedata[i].status) {
        this.ageChipsdata.push(this.checkedAgedata[i].value)
      }
    }
    for (let i = 0; i < this.checkedGenderdata.length; i++) {
      if (this.checkedGenderdata[i].status) {
        this.genderChipsdata.push(this.checkedGenderdata[i].value)
      }
    }
    this.selectionDataArray=[this.industryValue,this.categoryValue]
    console.log(this.selectionDataArray)
    this.isAudienceTable = false;
  }
  /**
   * 
   * @param $event :an event which trigers when the checkbox is checked or unchecked
   * @description:Age checkbox on change function
   */
  OnAgeChange($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.checkedAgedata = this.checkedAgedata.map((x: any) => {
      if (x.value == id) {
        x.status = isChecked;
        return x;
      }
      return x;
    })
  }
  OnGenderChange($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.checkedGenderdata = this.checkedGenderdata.map((x: any) => {
      if (x.value == id) {
        x.status = isChecked;
        return x;
      }
      return x;
    })
  }
}
