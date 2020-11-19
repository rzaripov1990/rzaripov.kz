<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        v-if="skills"
        title="Навыки"
      >
        <template slot="actions">
          (в % как дизайнерское решение)
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>

      <content-section
              v-if="educations"
              id="to-timeline"
              title="Образование"
      >
          <v-layout
                  v-for="(education, i) in educations"
                  :key="i"
          >
              <v-flex md4>
                  {{ education.from }} - {{ education.to }}
              </v-flex>
              <v-flex md8>
                  <strong v-if="education.title">{{ education.title }}</strong>
                  <div v-if="education.location">
                      <i>{{ education.location }}</i>
                  </div>
                  <div v-if="education.description">
                      {{ education.description }}
                  </div>
              </v-flex>
          </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    educations: [
      {
        from       : '2018',
        to         : '2021',
        title      : 'Семипалатинский государственный университет имени Шакарима',
        location   : 'г. Семей (Семипалатинск)',
        description: 'Информационно-коммуникационных технологии, Организация перевозок движение и эксплуатация транспорта',
      },
      {
        from       : '2007',
        to         : '2010',
        title      : 'Евразийский технико-гуманитарный колледж',
        location   : 'г. Семей (Семипалатинск)',
        description: 'Организатор дорожного движения',
      },
    ],
    skills: [
      {
        title: 'Delphi (VCL, FMX)',
        icon : 'mdi-language-php',
        value: 60,
      },
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 60,
      },
      {
        title: 'GoLang',
        icon : 'mdi-language-go',
        value: 38,
      },
      {
        title: 'Kotlin',
        icon : 'mdi-language-java',
        value: 38,
      },
      {
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 20,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 10,
      },
      { divider: true },
      {
        title: 'Sql Server',
        icon : 'mdi-database',
        value: 80,
      },
      {
        title: 'Firebird',
        icon : 'mdi-database',
        value: 80,
      },
      {
        title: 'MySQL',
        icon : 'mdi-database',
        value: 56,
      },
      { divider: true },
      {
        title: 'CentOS Server',
        icon : 'mdi-linux',
        value: 60,
      },
      {
        title: 'Ubuntu Server',
        icon : 'mdi-ubuntu',
        value: 50,
      },
      { divider: true },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 35,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 67,
      },
      {
        title: 'Jira администратор',
        icon : 'mdi-jira',
        value: 80,
      },
      {
        title: 'Bitbucket администратор',
        icon : 'mdi-bitbucket',
        value: 80,
      },
      { divider: true },
      {
        title: 'Управление командой',
        icon : 'mdi-account-group',
        value: 68,
      },
      {
        title: 'Scrum/Agile',
        icon : 'mdi-developer-board',
        value: 46,
      },
      {
        title: 'Коммуникации',
        icon : 'mdi-account-group',
        value: 68,
      },
      { divider: true },
      {
        title: 'Windows пользователь',
        icon : 'mdi-laptop-windows',
        value: 50,
      },
      {
        title: 'MacOS пользователь',
        icon : 'mdi-laptop-mac',
        value: 50,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
