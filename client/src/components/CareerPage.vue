<template>
    <div>
        <navigation-menu/>
        <h1 align="center">Start Your Career with Us!!!</h1>
        <div class='career'>
            <h2>What we offer:</h2>
            <ul>
                <li>Talk to CEO and CTO directly.</li>
                <li>Work on the most important problems in the field with a team who will challenge and support you.</li>
                <li>Wellness and commuter benefits</li>
                <li>Flexible work hours and competitive vacation policy</li>
                <li>Healthy, organic snacks every day</li>
                <li>Fun workday activities like soccer, board games, bowling, or movies. Once every month, we take the entire company (including +1s and kids) on a dinner and fun activities</li>
                <li>Executive and one-on-one mentorship for everyone</li>
                <li>We embrace diversity, and give visa sponsorship</li>
                <li>Health, dental, and vision benefits for you and your family, as well as life insurance</li>
                <li>401(k) plan</li>
            </ul>
        </div>
        <div class='job-list'>
            <h2>Opennings:</h2>
            <ul>
                <li>UX Designer</li>
                <li>Frontend Engineer</li>
                <li>Backend Engineer</li>
                <li>Full Stack Engineer</li>
                <li>Infrastructure Engineer</li>
            </ul>
        </div>
        <div class='to-apply'>
            <h2>To apply:</h2>
            <p>send email to: YouBarrageTube@gmail.com</p>
        </div>
    </div>
</template>

<script>
    import NavigationMenu from './NavigationMenu'
    import Profile from './Profile'
    
    export default {
        name: 'CareerPage',
        components: {
            'navigation-menu': NavigationMenu,
            'profile': Profile
        }
    }
</script>


<style scoped>
    div.career {
        margin-left: 30%;
        margin-right: 40%;
    }
    div.job-list {
        margin-left: 30%;
        margin-right: 40%;
    }
    div.to-apply {
        margin-left: 30%;
        margin-right: 40%
    }
</style>
