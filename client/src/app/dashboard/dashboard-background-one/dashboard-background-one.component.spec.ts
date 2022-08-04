import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardBackgroundOneComponent } from "./dashboard-background-one.component";

describe("DashboardBackgroundOneComponent", () => {
  let component: DashboardBackgroundOneComponent;
  let fixture: ComponentFixture<DashboardBackgroundOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardBackgroundOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBackgroundOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
