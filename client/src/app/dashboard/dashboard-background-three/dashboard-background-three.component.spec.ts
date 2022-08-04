import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardBackgroundThreeComponent } from "./dashboard-background-three.component";

describe("DashboardBackgroundThreeComponent", () => {
  let component: DashboardBackgroundThreeComponent;
  let fixture: ComponentFixture<DashboardBackgroundThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardBackgroundThreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBackgroundThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
