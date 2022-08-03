import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardBackgroundComponent } from "./dashboard-background.component";

describe("DashboardBackgroundComponent", () => {
  let component: DashboardBackgroundComponent;
  let fixture: ComponentFixture<DashboardBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardBackgroundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
