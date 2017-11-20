import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CustomerViewComponent} from "./customer-view.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {Customer} from "./Customer";

describe('CustomerViewComponent', () => {
  let component: CustomerViewComponent;
  let fixture: ComponentFixture<CustomerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewComponent],
      imports: [
        NgbModule,
        ReactiveFormsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewComponent);
    component = fixture.componentInstance;
    component["customerId"] = 1234;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should retrieve a customer "Harry" via customerId', () => {
    // console.log("FirstName: " + component.customer.firstName);
    expect(component.customer.firstName == "Harry");
  });

  it('should calculate proper age in years', () => {
    // console.log("Age in Years shuold be 36: " + component.ageInYears());
    expect(component.ageInYears()).toBe(36);
  });

  it('should show proper age in years', async(() => {
    // const fixture = TestBed.createComponent(CustomerViewComponent);
    // fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div > div:nth-child(7) > span:nth-child(2)').textContent).toContain("36yrs,");
  }));

  // body > app-root > customer-management > customer-table > div > div > span:nth-child(1) > customer-view > div > div:nth-child(7) > span:nth-child(2)

  // it('should fail', () => {
  //   fail("Is Karma out there???");
  // });

});
