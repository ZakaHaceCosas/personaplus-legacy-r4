![DIAGRAMA](https://personaplus.vercel.app/banner.png)
<h1 align="center">PersonaPlus</h1>
<h2 align="center">Dale un PLUS a tu Persona</h2>
<p align="center">
DOCUMENTACIÓN DE LA BASE DE CÓDIGO
</p>

###### Base v4

> [!WARNING]
> **DOCUMENTACIÓN INCOMPLETA**

## 0. ¿Qué es PersonaPlus?
###### (Este punto es orientativo y no dirijido al código como tal)
PersonaPlus es una aplicación de salud y bienestar digital (con planes para implementar también protección antivirus), desarrollada en React Native bajo Expo, y haciendo uso también de Vercel junto con Supabase para alojar el sistema de cuentas.

Aún se halla en una fase muy temprana del desarrollo, pero apunta a traer las siguientes funcionalidades:
- Sistema basado en "Objetivos".
	- El usuario nada más acceder a la app por primera vez, especifica sus datos necesarios para el funcionamiento de la app Y sus objetivos. Además, diariamente, recibirá una notificación para añadir datos nuevos sobre lo que ha hecho en el día de hoy, para crear un perfil y unas estadísticas sobre el mismo.
	- Un "Objetivo" es una meta (puede ser un recordatorio para una actividad o proponerse hacer que las estadísticas lleguen a `x` punto (lo cual requeriría mejorar sus hábitos, probablemente)). Se clasifican en dos tipos, según la implementación:
		- OBJETIVOS ACTIVOS: Aquellos que implican un recordatorio para realizar una actividad. Estos pueden marcarse como completados, como no realizados (dando por hecho que no se realizarán en todo el día), o pueden activarse en el momento, iniciando una sesión (la app se volvería un cronometro con indicaciones para que el usuario realice la actividad en cuestión).
- Funcionalidades de Bienestar Digital y prevención de la adicción al teléfono móvil.
	- El usuario podrá ver en que apps pasa más o menos tiempo, de que apps le llegan más o menos notificaciones, y etcétera.
- Autocontrol: El usuario se monitorea a si mismo (que come, cuando lo hace, con que frecuencia, visitas al lavabo, frecuencia con la que fuma o bebe (si lo hace)), para ayudarse a autocontrolar sus hábitos (o a abandonarlos directamente si fueran malos hábitos, como la fuma o el consumo de estupefacientes).

Con estas ideas apuntamos a crear una aplicación estrella y de código abierto para ayudar a las personas a mejorar su propia salud.

## 1. El *stack* tecnológico
Se usarán las siguientes tecnologías para llevar a cabo el desarrollo de la aplicación.

![DIAGRAMA](https://personaplus.vercel.app/stack_del_proyecto.png)

El código estará diversificado en dos partes, una para la aplicación (que estará contenida en el APK final) y otra para el sistema de cuentas (desde el navegador y alojado en Vercel)

![DIAGRAMA](https://personaplus.vercel.app/org_repos.png)

(Se muestra además un 3er repositorio; el de la página de inicio, la cual para más simplicidad es un repo y URL separados).

## 2 Funcionamiento: La aplicación
La aplicación está basada en Expo. Todo estará empaquetado en el propio APK, a excepción del sistema de cuentas, que funcionará como se muestra el siguiente diagrama.

![DIAGRAMA](https://personaplus.vercel.app/back_relacion_app-cuentas.png)

La aplicación usará la cuenta para copias de seguridad y nada más, no para almacenar sus datos personales (incluyendo los datos de salud y rutinas generados con el uso de la app), ya que por motivos de privacidad del usuario estos no se sincronizarán en la nube.

La app se divide en dos módulos, el de salud y el antivirus, cómo se puede apreciar en este otro diagrama.
![DIAGRAMA](https://personaplus.vercel.app/org_esquema_app.png)
El primer módulo, en términos de funcionalidad, se divide en dos submódulos.
-	SALUD FÍSICA
	-	**FUNCIÓN**:
	1. Ofrecer al usuario la capacidad de crear objetivos diarios, que él mismo indicará antes de la media noche el haber cumplido dicho objetivo o no (no indicarlo = no lo ha cumplido). Ejemplos de objetivos serían "Correr durante 10 minutos", "Correr 15 kilómetros", "Hacer x flexiones al día", y similares.
	2. El usuario también podrá controlar su dieta, estableciendo a que horas desayuna, come, o cena, para recibir una notificación a cada hora de esta manera:
![DIAGRAMA](https://personaplus.vercel.app/func_salud1_dieta.png)
	2.1. Además, a la noche (cuando se le pregunte por todos sus objetivos en general), también se le preguntará, entre otras cosas, si ha estado "picando entre horas", para tener estadísticas más precisas.
	3. En base a dichos objetivos y registros alimentarios, hacer cálculos con la actividad física realizada por el usuario (de los que la app tenga constancia) para obtener estadísticas y en base a dichas estadísticas mantener al usuario informado de su rendimiento.
- SALUD PSICOLÓGICA (BIENESTAR DIGITAL)
	1.	El usuario tendrá a su disposición un conteo del tiempo invertido en cada aplicación y de la cantidad de notificaciones que recibe de cada una, mas un contador de desbloqueos de la pantalla, para que el usuario sepa con exactitud que uso hace del dispositivo y como lo usa.
	
Hasta aquí (nota mental para acabar la documentación)
