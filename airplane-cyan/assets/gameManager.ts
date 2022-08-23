import { _decorator, Component, Node, Material, MeshRenderer } from 'cc';
const { ccclass, property, menu, requireComponent, executeInEditMode } = _decorator;

@ccclass('gameManager')
@requireComponent(MeshRenderer)
@menu('customScript/manager')
@executeInEditMode(true)
export class gameManager extends Component {
    @property
    public foo = 10;

    @property(Material)
    public bar:Material = null;

    private _init = false;

    onLoad(){
        console.log('onLoad');
    }
    
    onEnable(){
        console.log('Enable');
    }

    start() {
        console.log('start');
    }

    update() {
        if(this._init === false){
            console.log('update');
        }
    }

    lateUpdate(){
        if(this._init === false){
            console.log('lateUpdate');
            this._init = true;
        }
    }

    onDisable(){
        console.log('onDisable');
            this._init = false;
    }

    onDestroy(){
        console.log('onDestroy');
    }
}

