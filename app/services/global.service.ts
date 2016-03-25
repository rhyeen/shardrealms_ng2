import {Injectable} from 'angular2/core';

@Injectable()
export class GlobalService {
  
  /**
   * Holds the current view for the browser.  
   * Can recurse into subViews if need be mainView: {view, subview:{view, subview:{..}}}
   *
   */
  public globalView = {
    view: "players",
    subView: null
    //subView: { view: "new", subView: null }
    //subView: { view: "edit", subView: { view: "leveling" } }
  };
  // public globalView = {
  //   view: "main",
  //   subView: null
  // };
  

  getGlobalView() {
    return this.globalView;
  }

  gotoMainMenu() {
    this.globalView.view = "main";
    this.globalView.subView = null;
  }

  gotoPlayerList() {
    this.globalView.view = "players";
    this.globalView.subView = null;
  }

  gotoNewPlayer() {
    this.globalView.view = "players";
    this.globalView.subView = { view: "new", subView: null };
  }

  gotoPlayerLeveling() {
    this.globalView.view = "players";
    this.globalView.subView = { view: "edit", subView: { view: "leveling" }};
  }

  gotoPlayerEdit() {
    this.globalView.view = "players";
    this.globalView.subView = { view: "edit", subView: null };
  }

  gotoPlayerSkillPoint() {
    this.globalView.view = "players";
    this.globalView.subView = { view: "edit", subView: { view: "skill point" }};
  }

  gotoTableList() {
    this.globalView.view = "tables";
    this.globalView.subView = null;
  }
}