/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package librojavarama.T4Clases.UsoThis;

/**
 *
 * @author Portatil
 */
public class T4Pag88UsoMetodotoString {

 public static void main(String[] args) {

  Rectangulo r1 = new Rectangulo(5, 7);
  Rectangulo r2 = new Rectangulo(5, 7);
  Rectangulo r3 = r1; // 2 referencias mismo objeto
  System.out.println(r1.toString());
  System.out.println(r2.toString());
  System.out.println(r3.toString());

 }
}
