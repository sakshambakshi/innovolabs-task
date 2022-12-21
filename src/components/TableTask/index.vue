<template>
  <div>
    <TableComponent>
      <template #table-head>
        <!-- <tr> -->
          <th>User id</th>
          <th>user name</th>
          <th>user username</th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
          <th>street</th>
          <th>suite</th>
          <th>city</th>
          <th>zipcode</th>
          <th>company name</th>
          <th>catchPhrase</th>
          <th>company.bs</th>
          <th>company.address.geo</th>
        <!-- </tr> -->
      </template>
      <template #table-row="{ user }">
        <tr>
          <td>
            {{ user.id }}
          </td>
          <td>
            {{ user.name }}
          </td>
          <td>
            {{ user.username }}
          </td>
          <td>
            <a v-bind="{ href: `mailto:${user.email}` }"> {{ user.email }}</a>
          </td>
          <td>
            <a v-bind="{ href: `phoneto:${user.email}` }"> {{ user.phone }} </a>
          </td>
          <td>
            <a :href="user.website">{{ user.website }}</a>
          </td>
          <td>
            {{ user.address.street }}
          </td>
          <td>
            {{ user.address.suite }}
          </td>
          <td>
            {{ user.address.city }}
          </td>
          <td>
            {{ user.address.zipcode }}
          </td>
         
          <!-- ---------------- -->
          <td>
            {{ user.company.name }}
          </td>
          <td>
            {{ user.company.catchPhrase }}
          </td>
          <td>
            {{ user.company.bs }}
          </td>
          <td>
            {{ user.address.geo }}
          </td>
        </tr>
      </template>
    </TableComponent>
  </div>
</template>
<script>
import TableComponent from "@/components/TableTask/TableComponent.vue";

export default {
  name: "TableTask",
  components: { TableComponent },
};
</script>
