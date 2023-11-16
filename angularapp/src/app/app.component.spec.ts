import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent) as any;
    component = fixture.componentInstance as any;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  fit('should_toggle_attendance_status_initial_present', () => {
    console.log(component['isPresent']);

    if(component['isPresent'] != undefined){
    const initialStatus = component['isPresent'];
    component['onToggleAttendance']();
    expect(component['isPresent']).toBe(!initialStatus);
    }
    else{
      expect(component['isPresent']).toBeDefined();
    }
  });

  fit('should_define_employeeName', () => {
    expect(component['employeeName']).toBeDefined(typeof String);
  });

  // it('should display employee status', () => {
  //   const element = fixture.nativeElement.querySelector('p:nth-child(2)');
  //   expect(element.textContent).toContain(component.isPresent ? 'Present' : 'Absent');
  // });

  fit('should_bind_the_image_source_correctly', () => {
    // Arrange: Set a test image URL
    if(component['imageUrl'] != undefined){
    const testImageUrl = 'https://test-image-url.com/johndoe.jpg';
    component['imageUrl'] = testImageUrl;

    // Act: Trigger change detection
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      // Assert: Check if the src attribute is correctly bound
      const imgElement = fixture.nativeElement.querySelector('img');
      expect(imgElement.getAttribute('src')).toBe(testImageUrl);
    });
  } else{
    expect(component['imageUrl']).toBeDefined();
  }
  });

  fit('should_update_employeeStatus_via_two_way_binding', () => {
    // Arrange: Set a test value
    if(component['employeeStatus'] != undefined){
    const testValue = 'Test Employee Status';
    component['employeeStatus'] = testValue;

    // Act: Trigger change detection
    fixture.detectChanges();

    // Get the input element and the paragraph element
    const inputElement = fixture.nativeElement.querySelector('input');
    const paragraphElement = fixture.nativeElement.querySelector('#twoway');
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert: Check if the input value and displayed value match
    expect(inputElement.value).toBe(testValue);
    expect(paragraphElement.textContent).toContain(testValue);
    }
    else {
      expect(component['employeeStatus']).toBeDefined();
    }
  });



  // fit('Attribute_Binding_should_set_colspan_attribute', () => {
  //   const tableElement = fixture.nativeElement.querySelector('#innertable');
  //   console.log(tableElement);

  //   expect(tableElement.getAttribute('attr.colspan')).toBe('2');
  // });

  // Add more test cases for class binding, style binding, and two-way binding
});
