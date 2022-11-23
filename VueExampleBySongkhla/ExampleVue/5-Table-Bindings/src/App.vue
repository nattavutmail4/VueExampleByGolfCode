<script setup>
    import {ref} from 'vue'
    const message = ref('สวัสดีชาวโลก')
    const alertText =()=>{alert('สวัสดีชาวโลก')}
    let id = 1
    const Data = [
        {id:id++,name:"ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา"},
        {id:id++,name:"โมบิลสูทกันดั้ม แม่มดจากดาวพุธ"},
        {id:id++,name:"Bleach Sennen Kessen-hen บลีช เทพมรณะ สงครามเลือดพันปี"},
        {id:id++,name:"Shinmai Renkinjutsushi no Tenpo Keie"},
        {id:id++,name:"Mairimashita! Iruma-kun 1rd Season อิรุมะคุงกับโรงเรียนปิศาจ (ภาค1)"},
        {id:id++,name:"Mairimashita! Iruma-kun 2rd Season อิรุมะคุงกับโรงเรียนปิศาจ (ภาค2)"},
        {id:id++,name:"Mairimashita! Iruma-kun 3rd Season อิรุมะคุงกับโรงเรียนปิศาจ (ภาค3)"},
        {id:id++,name:"Yowamushi Pedal Limit Break โอตาคุน่องเหล็ก (ภาค1)"},
        {id:id++,name:"Yowamushi Pedal Limit Break โอตาคุน่องเหล็ก (ภาค2)"},
        {id:id++,name:"Yowamushi Pedal Limit Break โอตาคุน่องเหล็ก (ภาค3)"},
        {id:id++,name:"Yowamushi Pedal Limit Break โอตาคุน่องเหล็ก (ภาค4)"},
        {id:id++,name:"Yowamushi Pedal Limit Break โอตาคุน่องเหล็ก (ภาค5)"},
        {id:id++,name:"Peter Grill to Kenja no Jikan Super Extra ปีเตอร์กริลล์กับห้วงเวลานักปราชญ์ (ภาค1)"},
        {id:id++,name:"Peter Grill to Kenja no Jikan Super Extra ปีเตอร์กริลล์กับห้วงเวลานักปราชญ์ (ภาค2)"},
        {id:id++,name:"Boruto Naruto Next Generations โบรูโตะ"},
        {id:id++,name:"4-nin wa Sorezore Uso wo Tsuku"},
    ]
    const del = (id)=>{
      
    }
</script>
<template>
    <h1>{{message}}</h1>
    <button @click ='alertText' type="button">แจ้งเตือน</button>
    <button @click ='alertText' type="button">เพิ่มข้อมูล</button>
    <table id="customers">
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Management</th>
        </tr>
        <tbody>
            <tr v-if="Data.length" v-for="(anime,index) in Data" style="text-align:left">
                <td>{{anime.id}}</td>
                <td>{{anime.name}}</td>
                <td>
                    <button @click="del">ลบ</button> |
                    <button @click="del">แก้ไข</button>
                </td>
            </tr>
            <tr v-else>
                <td colspan="2">ไม่มีข้อมูล</td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 2px solid #ddd;
  padding: 6px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>