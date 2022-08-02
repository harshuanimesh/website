import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GenericServiceComponent } from "./generic-service.component";

describe("GenericServiceComponent", () => {
  let component: GenericServiceComponent;
  let fixture: ComponentFixture<GenericServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericServiceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
