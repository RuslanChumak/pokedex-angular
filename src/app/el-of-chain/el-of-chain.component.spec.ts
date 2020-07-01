import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElOfChainComponent } from './el-of-chain.component';

describe('ElOfChainComponent', () => {
  let component: ElOfChainComponent;
  let fixture: ComponentFixture<ElOfChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElOfChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElOfChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
