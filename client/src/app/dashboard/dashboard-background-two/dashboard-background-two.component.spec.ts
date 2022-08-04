import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardBackgroundTwoComponent } from "./dashboard-background-two.component";

describe("DashboardBackgroundTwoComponent", () => {
  let component: DashboardBackgroundTwoComponent;
  let fixture: ComponentFixture<DashboardBackgroundTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardBackgroundTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBackgroundTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
