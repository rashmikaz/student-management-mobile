import {Drawer} from "expo-router/drawer";

export default function sidebar() {
    return (
        <Drawer>
            <Drawer.Screen name="home" options={{title : "Home"}}/>
            <Drawer.Screen name="student" options={{title : "Student"}}/>
            <Drawer.Screen name="teacher" options={{title : "Teacher"}}/>
            <Drawer.Screen name="program" options={{title : "Program"}}/>
        </Drawer>
    );
}