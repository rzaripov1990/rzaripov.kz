<template>
  <v-card
    color="#304658"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Зарипов Равиль
        </h1>
        <span>
           Разработчик
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="72"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'Инфо',
          items: [
            {
              name: 'День рождения',
              icon: 'mdi-cake-variant',
              text: '21 Июня 1990',
            },
            {
              name: 'Город',
              icon: 'mdi-map-marker',
              text: 'Казахстан, Алматы',
            },
          ],
        },
        socials: {
          title: 'Соц.сети',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/rzaripov1990',
              link: 'https://github.com/rzaripov1990',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/ravil-zaripov-471064137',
              link: 'http://linkedin.com/in/ravil-zaripov-471064137',
            },
            {
              icon: 'mdi-telegram',
              text: 't.me/rzaripov1990',
              link: 'https://t.me/rzaripov1990',
            },
            {
              icon: 'mdi-instagram',
              text: 'instagram.com/rzaripov1990',
              link: 'https://instagram.com/rzaripov1990',
            },
          ],
        },
        languages: {
          title: 'Языки',
          items: [
            {
              text : 'Русский',
              value: 100,
            },
            {
              text : 'Қазақ',
              value: 100,
            },
            {
              text : 'English',
              value: 100,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #4b6d89;
}
</style>
