package game;

public class Missile extends Bullet {

    /*构造方法*/
    public Missile(int x , int y){
        super(x , y);
        this.x=x;
        this.y=y;
        this.image=Start.missileOfHeroImg;
        this.width=this.image.getWidth();
        this.height=this.image.getHeight();
        this.speed=5;
        this.damage=2;
    }

    /*导弹前进*/
    public void move() {
        this.x += this.speed;
    }
}
