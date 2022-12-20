import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { auditTime, map, startWith } from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import locationData from './json/location.json';
import testdata from './json/j.json'
import { Element } from '@angular/compiler';
import { ServicesService } from 'src/app/shared/services.service';
import { Router } from '@angular/router';
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
  /**
   * @description:Stepper 1 formgroup
   */
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required]
  })
  secondFormGroup = this.fb.group({
    radius: ['', Validators.required]
  })
  thirdFormGroup = this.fb.group({
    application: ['', Validators.required],
  })
  isLinear = true;  /**
   * @description:stepper 2 form group
   */
  campeignCategory: campaign[] = [
    { value: '0' },
    { value: '1' },
    { value: '1.5' },
    { value: '2' },
    { value: '2.5' },
    { value: '3' },
    { value: '3.5' },
    { value: '4' },
    { value: '4.5' },
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
  Chipsdata: any = []
  industryValue: any
  categoryValue: any
  selectionDataArray: any = []
  applicationType: any
  getallData: any = []
  datepipe: string
  // ............................................................................
  constructor(private fb: FormBuilder,private service:ServicesService,private router:Router) {
  }
  ngOnInit(): void {
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
    this.isCategoryClicked = []
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
      this.industryValue = "Demography"
    } else if (i == 1) {
      this.viewGeographicCategories = true;
      this.viewDemographicCategories = false;
      this.viewLabelCategories = false;
      this.viewGenderCategories = false
      this.viewAgeCategories = false
      this.industryValue = "Geography"
    } else {
      this.viewGeographicCategories = false;
      this.viewDemographicCategories = false;
      this.viewLabelCategories = true;
      this.viewGenderCategories = false
      this.viewAgeCategories = false
      this.industryValue = "360 labels"
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
      this.categoryValue = this.industryValue + "Category 1"
    } else if (i == 1) {
      this.viewAgeCategories = false
      this.viewGenderCategories = true
      this.categoryValue = this.industryValue + "Category 2"
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
    this.Chipsdata = []
    if (this.applicationType == 'age') {
      for (let i = 0; i < this.checkedAgedata.length; i++) {
        if (this.checkedAgedata[i].status) {
          this.Chipsdata.push(this.checkedAgedata[i].value)
        }
      }
    } else {
      for (let i = 0; i < this.checkedGenderdata.length; i++) {
        if (this.checkedGenderdata[i].status) {
          this.Chipsdata.push(this.checkedGenderdata[i].value)
        }
      }
    }
    this.selectionDataArray = [this.industryValue, this.categoryValue]
    console.log(this.selectionDataArray)
    this.isAudienceTable = false;
  }
  /**
   * 
   * @param $event :an event which trigers when the checkbox is checked or unchecked
   * @description:Age checkbox on change function
   */
  OnChange($event: any, type: any) {
    this.applicationType = type
  }
  validationError(form: any) {
    form.markAllAsTouched()
  }
  /**
   * @description:Binding all the data to an object
   */
  done() {
    const obj = {
      campaignName: this.firstFormGroup.value.firstCtrl,
      status: "Draft",
      Ctr: this.secondFormGroup.value.radius,
      startDate:new Date(),
      applicationCategory:this.applicationType,
      applicationCategoryValues:this.Chipsdata
    }
    console.log(obj)
    this.service.addData(obj).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      complete: () => {
        this.router.navigateByUrl("/");
      }
    }
    )
  }
  }
