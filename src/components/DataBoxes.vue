<template>
    <div class="grid md:grid-cols-2 gap-4"> 
        <!-- 1st box -->
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h2 class="text-3xl text-blue-900 font-bold mb-4"> Cases</h2>
            <div class="text-2xl mb-4">
                <span class="font-bold">New :</span>
                {{numberWithComas(status.NewConfirmed)}}
            </div>

            <div class="text-2xl mb-4">
                <span class="font-bold">Total :</span>
                {{numberWithComas(status.TotalConfirmed)}}
            </div>
        </div>
        <!-- 2nd -->
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h2 class="text-3xl text-blue-900 font-bold mb-4"> Cases</h2>
            <div class="text-2xl mb-4">
                <span class="font-bold">Deaths :</span>
                {{numberWithComas(status.NewDeaths)}}
            </div>

            <div class="text-2xl mb-4">
                <span class="font-bold">Total :</span>
                {{numberWithComas(status.TotalDeaths)}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DataBoxes',
    props:['status'],
    methods:{
        numberWithComas(x){
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        }
    }

}
</script>